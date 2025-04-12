import axios from '@/services/utils/axios';

export interface TransactionFilters {
  category?: string;
  phrase?: string;
  page?: number;
}

export interface IData {
  id: number;
  transactionable_type: string; //category type
  transactionable_id: number;
  status: number | string;
  amount: string;
  balance: string;
  user_id: number;
  transaction_uid: string; //transaction id
  created_at: string;
  updated_at: string;
  user: userProps;
  transactionable?: userTransactionableProps;
}

export interface userProps {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  is_active: number;
  otp_code: string;
  otp_expiration: number;
  otp_attempts: number;
  balance: number;
  blocked: number;
  // 2fa: number;
  uid: string;
  image: string;
  wallet_address: string;
  created_at: string;
  updated_at: string;
}
export interface userTransactionableProps {
  id: number;
  amount: string;
  created_at: string;
  updated_at: string;
  sender_user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    is_active: number;
    otp_code: string;
    otp_expiration: number;
    otp_attempts: number;
    balance: number;
    blocked: number;
    // 2fa: number;
    uid: string;
    image: string;
    wallet_address: string;
    created_at: string;
    updated_at: string;
    pivot: {
      transfer_id: number;
      user_id: number;
    };
  };
  getter_user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    is_active: number;
    otp_code: string;
    otp_expiration: number;
    otp_attempts: number;
    balance: number;
    blocked: number;
    // 2fa: number;
    uid: string;
    image: string;
    wallet_address: string;
    created_at: string;
    updated_at: string;
    pivot: {
      transfer_id: number;
      user_id: number;
    };
  };
}

export interface TransactionResponse {
  status: boolean;
  transactions: {
    current_page: number;
    data: any[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

export async function getTransactions(filters: TransactionFilters) {
  const { data } = await axios.post<TransactionResponse>(
    '/getTransactions',
    filters,
  );
  return data;
}

export async function getTransactionById(id: number) {
  const { data } = await axios.get(`/getTransactionFrom/${id}/User`);
  return data;
}
