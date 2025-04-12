import { ReactNode } from 'react';
//
interface User {
  email: string;
}

declare global {
  interface ChildComponentProps {
    children: ReactNode;
  }
  interface SignKeys {
    username: string;
    password: string;
  }

  interface R_Root {
    user: User;
  }
  interface StringObj {
    [key]: string;
  }
  type ForgetStep = 'forget' | 'verify' | 'success' | 'password';

  type IconType =
    | 'Contract'
    | 'Contract2'
    | 'Overviwe'
    | 'Overviwe2'
    | 'Transactions'
    | 'Transactions2'
    | 'Users'
    | 'Users2'
    | 'Webpage'
    | 'close';
}
