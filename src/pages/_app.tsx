import type { AppProps } from 'next/app';
import ThemeProvider from '@/setup/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import '@/setup/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false, // غیرفعال کردن ریکوست در اولین رندر
        refetchOnWindowFocus: false, // غیرفعال کردن ریکوست در تغییر فوکوس پنجره
        retry: false,
      },
    },
  }); //

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster
          position="top-right"
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
    </QueryClientProvider>
  );
}
