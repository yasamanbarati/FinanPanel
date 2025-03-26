import { QueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

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
