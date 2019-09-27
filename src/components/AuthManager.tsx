import Axios from 'axios';
import React, {
  createContext,
  ElementType,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { User } from '../models/User';

interface Props {
  Authenticated: ElementType<any>;
  Anonymous: ElementType<any>;
}

const AuthManager: FC<Props> = ({ Authenticated, Anonymous }) => {
  const [token, setToken] = useState<string | null>(existingToken);
  const [user, setUser] = useState<User | null>(existingUser);
  const interceptor = useRef<number>();

  useEffect(() => {
    if (token) {
      interceptor.current = Axios.interceptors.request.use(config => {
        config.headers = { Authorization: `Bearer ${token}` };
        return config;
      });
    } else if (interceptor.current !== undefined) {
      Axios.interceptors.request.eject(interceptor.current);
    }
  }, [token]);

  const login = useCallback((user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {user ? <Authenticated /> : <Anonymous />}
    </AuthContext.Provider>
  );
};

const userString = localStorage.getItem('user');
const existingUser = userString ? JSON.parse(userString) : null;
const existingToken = localStorage.getItem('token');

interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const useUser = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    throw new Error('useUser hook called when no user present in context');
  }
  return user;
};

const useLogin = () => {
  const { user, login } = useContext(AuthContext);
  if (user) {
    throw new Error(
      'useLogin hook called when user already present in context',
    );
  }
  return login;
};

const useLogout = () => {
  const { user, logout } = useContext(AuthContext);
  if (!user) {
    throw new Error('useLogout hook called when no user present in context');
  }
  return logout;
};

export { AuthManager, useUser, useLogin, useLogout };
