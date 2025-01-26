import React from 'react';
import { FormProvider, FormProviderProps } from 'react-hook-form';

export function Form(props: FormProviderProps<any, any>) {
  return <FormProvider {...props} />;
}
