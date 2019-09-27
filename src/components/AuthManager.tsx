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
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {user && token ? <Authenticated /> : <Anonymous />}
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
  token: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  token: null,
});

const useUser = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    throw new Error('useUser hook called when no user present in context');
  }
  return user;
};

const useToken = () => {
  const { token } = useContext(AuthContext);
  if (!token) {
    throw new Error('useToken hook called when no user present in context');
  }
  return token;
};

const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

export { AuthManager, useUser, useLogin, useLogout, useToken };
