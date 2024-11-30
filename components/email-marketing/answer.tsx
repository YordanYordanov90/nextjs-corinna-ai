/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { Loader } from '../loader'
import { CardDescription } from '../ui/card'
import { useAnswers } from '@/hooks/email-marketing/use-marketing'

type Props = {
  id?: string
}

const Answers = ({ id }: Props) => {
  const { answers, loading } = useAnswers(id!)
  return (
    <div className="flex flex-col gap-5 mt-10">
      <Loader loading={loading}>
        
          
        {answers.map((answer: { customer: any[] } ) =>
          answer.customer.map(
            (customer) =>
              customer.questions.length > 0 &&
              customer.questions.map(({question}: any, {key}: any) => (
                <div key={key}>
                  <p>{question.question}</p>
                  <CardDescription>{question.answered}</CardDescription>
                </div>
              ))
          )
        )}
      </Loader>
    </div>
  )
}

export default Answers