import { useState } from 'react';

import {
    PaymentElement,
    
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
  import { PRODUCT } from '../productInfo';


export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState<string | undefined>("");

    const [email, setEmail] = useState<string>("")
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      if (elements == null || stripe == null) {
        return;
      }
  
      // Trigger form validation and wallet collection
      const {error: submitError} = await elements.submit();
      if (submitError?.message) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }
  
      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const res = await fetch('https://d78c5nr8x4.us.aircode.run/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            currency: 'USD',
            email: email,
            amount: PRODUCT.price * 100,
            paymentMethodType: "card"

        })
      });
  
      const {client_secret: clientSecret} = await res.json();
  
      const {error} = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
      });
  
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className='px-4'>
        <div className='mb-3'>
<label htmlFor="email-input">Email</label>
<div>
    <input value={email} onChange={(e => setEmail(e.target.value))} type="email" name="" id="email-input" placeholder='Example@gmail.com' className='p-3 w-full bg-white rounded-md border border-[#e6e6e6] box-shadow-custom' />
</div>
        </div>
        <PaymentElement />
        <button type="submit" className="bg-indigo-500 text-white hover:bg-indigo-600 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] focus:outline-none border-gray-900 hover:border-gray-900 border-2 mt-4" disabled={!stripe || !elements}>
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    );
  };
  