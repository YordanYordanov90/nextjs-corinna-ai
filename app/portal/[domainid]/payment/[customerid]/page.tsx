/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import { onDomainCustomerResponses } from '@/actions/appoinment';
import { onGetDomainProductsAndConnectedAccountId } from '@/actions/payment';

import PortalForm from '@/components/forms/portal/portal-form';
import React from 'react';

const CustomerPaymentPage = async ({
  params,
}: {
  params: { domainid: string; customerid: string };
}) => {
  try {
    const { domainid, customerid } = await params;

    // Validate params
    if (!customerid || !domainid) {
      console.error('Invalid params:', { customerid, domainid });
      throw new Error('Missing domainid or customerid.');
    }

    const questions = await onDomainCustomerResponses(customerid);
    if (!questions) {
      console.error('Questions not found for customerid:', customerid);
      throw new Error('Failed to fetch questions.');
    }

    const products = await onGetDomainProductsAndConnectedAccountId(domainid);
    if (!products) {
      console.error('Products not found for domainid:', domainid);
      throw new Error('Failed to fetch products.');
    }

    return (
      <PortalForm
        email={questions.email!}
        products={products?.products}
        amount={products?.amount}
        domainid={domainid}
        customerId={customerid}
        questions={questions.questions}
        stripeId={products?.stripeId!}
        type="Payment"
      />
    );
  } catch (error) {
    console.error('Error in CustomerPaymentPage:', error);
    return <div>An error occurred. Please try again later.</div>;
  }
};

export default CustomerPaymentPage;
