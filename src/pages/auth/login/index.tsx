import React from 'react';
import Page from '@/components/Page';
import Login from '@/components/screen/auth/login';
import AuthLayout from '@/layout/AuthLayout';
//===================================//
export default function LogInPage() {
  return (
    <Page title="Login">
      <AuthLayout>
        <Login />
      </AuthLayout>
    </Page>
  );
}
