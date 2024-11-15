import { onGetSubscriptonPlan } from '@/actions/settings'
import React from 'react'
import Section from '../section-label'


const BillingSettings = async () => {
    const plan = await onGetSubscriptonPlan()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
        <div className='lg:col-span-3'>
            <Section label='Plan' message={plan} />

        </div>
    </div>
  )
}

export default BillingSettings