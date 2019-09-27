import Axios, {
  AxiosRequestConfig,
  CancelTokenSource,
  AxiosError,
} from 'axios';
import {
  useCallback,
  useState,
  useRef,
  useEffect,
  DependencyList,
} from 'react';
import { useToken } from '../components/AuthManager';

type RequestConfig<P extends unknown[]> = (...params: P) => AxiosRequestConfig;
type ResponseHandler<P extends unknown[]> = (data: any, ...params: P) => void;

const useRequest = <P extends unknown[]>(
  requestConfig: RequestConfig<P>,
  responseHandler: ResponseHandler<P>,
  deps: DependencyList,
) => {
  const token = useToken();
  const interceptor = useRef<number>();

  useEffect(() => {
    if (token) {
      interceptor.current = Axios.interceptors.request.use(config => {
        config.params = { ...config.params, access_token: token };
        return config;
      });
    } else if (interceptor.current !== undefined) {
      Axios.interceptors.request.eject(interceptor.current);
    }
  }, [token]);

  const [loading, setLoading] = useState(0);
  const [error, setError] = useState<string | undefined>(undefined);

  // keeps track of currently running cancel token sources
  const sourceRef = useRef<CancelTokenSource[]>([]);

  useEffect(() => {
    // this will run when component unmounts
    return () => {
      sourceRef.current.forEach(source => source.cancel());
    };
  }, []);

  const memoizedRequestConfig = useCallback(requestConfig, deps);
  const memoizedResponseHandler = useCallback(responseHandler, deps);

  const request = useCallback(
    async (...params: P) => {
      const source = Axios.CancelToken.source();
      sourceRef.current.push(source);

      const config: AxiosRequestConfig = {
        ...memoizedRequestConfig(...params),
        cancelToken: source.token,
      };

      setLoading(l => l + 1);
      setError(undefined);

      try {
        const response = await Axios(config);
        memoizedResponseHandler(response.data, ...params);
      } catch (thrown) {
        if (Axios.isCancel(thrown)) {
          // this was canceled, do nothing
        } else {
          const error = thrown as AxiosError;
          if (!error.response) {
            setError('No connection');
          } else {
            setError(error.response.statusText);
          }
        }
      }

      setLoading(l => l - 1);

      const sourceIndex = sourceRef.current.indexOf(source);
      sourceRef.current.splice(sourceIndex, 1);
    },
    [memoizedRequestConfig, memoizedResponseHandler],
  );

  return [request, Boolean(loading), error] as const;
};

export default useRequest;
