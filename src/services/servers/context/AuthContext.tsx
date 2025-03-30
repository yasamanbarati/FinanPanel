import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login as loginApi } from '@/services/servers/api/api.auth';
import { useRouter } from 'next/router';

interface User {
  name: string;
  email: string;
  image: string;
  balance: number;
  id: string;
  is_active: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    setIsLoading: (value: boolean) => unknown,
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

// async function fakeLoginApi(email: string, password: string) {
//   return new Promise<User>((resolve, reject) => {
//     setTimeout(() => {
//       if (password === '12345678') {
//         resolve({
//           name: 'Sara Madison',
//           email,
//           image: '/static/images/avatar.jpg',
//           balance: 2400,
//         });
//       } else {
//         reject(new Error('Wrong password!'));
//       }
//     }, 800);
//   });
// }

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get('user_info');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const { mutateAsync: loginMutation } = useMutation<
    any,
    Error,
    {
      email: string;
      password: string;
      rememberMe: boolean;
      setIsLoading: (value: boolean) => unknown;
    }
  >({
    mutationFn: async ({ email, password }) => {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await loginApi(formData);

      return response;
    },
    onMutate: ({ setIsLoading }) => {
      setIsLoading(true);
    },
    onSuccess: (data: any, { rememberMe }) => {
      const { authorisation: userData } = data;

      const userInfo = {
        id: userData.user.id,
        name: userData.user.name,
        email: userData.user.email,
        is_active: userData.user.is_active,
        balance: userData.user.balance,
        image: userData.user.image || '/static/images/avatar.png',
      };

      setUser(userInfo);

      if (rememberMe) {
        Cookies.set('token', userData.token, { expires: 10 });
        Cookies.set('user_info', JSON.stringify(userInfo), { expires: 10 });
      } else {
        Cookies.set('token', userData.token);
        Cookies.set('user_info', JSON.stringify(userInfo));
      }
      router.push('/');

      toast.success(data?.message || 'Login successful!');
    },
    onSettled: (_, __, { setIsLoading }) => {
      setIsLoading(false);
    },
  });

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean,
    setIsLoading: (value: boolean) => unknown,
  ) => {
    await loginMutation({ email, password, rememberMe, setIsLoading });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('token');
    Cookies.remove('user_info');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
