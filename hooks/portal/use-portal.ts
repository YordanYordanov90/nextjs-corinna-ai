/* eslint-disable @typescript-eslint/no-explicit-any */

  
  import {  useState } from 'react'
  import { useForm } from 'react-hook-form'
import { useToast } from '../use-toast'
import { onBookNewAppointment, saveAnswers } from '@/actions/appoinment'
  
  export const usePortal = (
    customerId: string,
    domainId: string,
    email: string
  ) => {
    const {
      register,
      setValue,
      formState: { errors },
      handleSubmit,
    } = useForm()
    const { toast } = useToast()
    const [step, setStep] = useState<number>(1)
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedSlot, setSelectedSlot] = useState<string | undefined>('')
    const [loading, setLoading] = useState<boolean>(false)
  
    setValue('date', date)
  
    const onNext = () => setStep((prev) => prev + 1)
  
    const onPrev = () => setStep((prev) => prev - 1)
  
    const onBookAppointment = handleSubmit(async (values) => {
      try {
        setLoading(true)
        const questions = Object.keys(values)
          .filter((key) => key.startsWith('question'))
          .reduce((obj: any, key) => {
            obj[key.split('question-')[1]] = values[key]
            return obj
          }, {})
  
        const savedAnswers = await saveAnswers(questions, customerId)
  
        if (savedAnswers) {
          const booked = await onBookNewAppointment(
            domainId,
            customerId,
            values.slot,
            values.date,
            email
          )
          if (booked && booked.status == 200) {
            toast({
              title: 'Success',
              description: booked.message,
            })
            setStep(3)
          }
  
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    })
  
    const onSelectedTimeSlot = (slot: string) => setSelectedSlot(slot)
  
    return {
      step,
      onNext,
      onPrev,
      register,
      errors,
      loading,
      onBookAppointment,
      date,
      setDate,
      onSelectedTimeSlot,
      selectedSlot,
    }
  }