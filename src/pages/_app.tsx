import type { AppProps } from 'next/app';
//mui theme provider
import ThemeProvider from '@/theme';
//react query provider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// notifactions provider
import { Toaster } from 'react-hot-toast';
//redux provider

// css
// import '@/styles/globals.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// css
import '@/styles/globals.css';
// import SettingProvider from '@/context/setting-context';
//============================================================//
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
    // <SettingProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
    // </SettingProvider>
  );
}
