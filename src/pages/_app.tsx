import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ThemeProvider from '@/setup/theme';
import queryClient from '@/services/utils/react-query';

import { AuthProvider, useAuth } from '@/services/servers/context/AuthContext';
import '@/setup/styles/globals.css';
import { LoadingPage } from '@/components/loding/loading-page';

function AppContent({ Component, pageProps }: Omit<AppProps, 'router'>) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // if (user === 'logOut' && router.pathname !== '/login') {
    //   router.push('/login');
    // }else if (router.pathname == '/forgot-password'){
    //   router.push('/')
    // }
    setIsLoading(false);
  }, [user, router]);

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{
              success: {
                style: {
                  background: '#4caf50',
                  color: '#fff',
                },
              },
              error: {
                style: {
                  background: '#f44336',
                  color: '#fff',
                },
              },
            }}
          />

          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
