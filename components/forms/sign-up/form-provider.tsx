/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Loader } from '@/components/loader';
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

export default function SignUpFormProvider({ children }: Props) {
  const { methods, onHandleSubmit, onGenerateOTP, loading } = useSignUpForm();
  return (
    <AuthContextProvider>
      <FormProvider {...methods}><form onSubmit={onHandleSubmit} className='w-full'>
        <div className='flex flex-col justify-between gap-3 w-full'>
          <Loader loading={loading}>{children}</Loader>
        </div>
        
        </form></FormProvider>
    </AuthContextProvider>
  );
}
