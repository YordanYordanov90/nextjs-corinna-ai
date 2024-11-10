'use client'

import { Loader } from '@/components/loader'
import { AuthContextProvider } from '@/context/use-auth-context'
import { useSignInForm } from '@/hooks/sign-in/use-sign-in'
import { FormProvider } from 'react-hook-form'


type Props = {
  children: React.ReactNode
}

const SignInFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignInForm()
  return (
   <AuthContextProvider>
    <FormProvider {...methods}>
        <form action="" onSubmit={onHandleSubmit} className="w-full">
            <div className='flex flex-col justify-between gap-3 w-full'>
                <Loader loading={loading}>
                    {children}
                </Loader>
            </div>
        </form>
    </FormProvider>
   </AuthContextProvider>
  )
}

export default SignInFormProvider