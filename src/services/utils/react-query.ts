import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
    mutations: {
      onError: (error: any) => {
        // if (error?.response?.data?.message) {
        //   toast.error(error?.response?.data?.message);
        // } else {
        //   toast.error('Something went wrong!');
        // }
      },
    },
  },
});

export default queryClient;
