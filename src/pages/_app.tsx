import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from '@/setup/theme';
import queryClient from '@/services/utils/react-query';

import '@/setup/styles/globals.css';
import { AuthProvider } from '@/services/servers/context/AuthContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
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
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
