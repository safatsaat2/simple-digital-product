import ProductCard from "../components/ProductCard"
import { PRODUCT } from "../productInfo"
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
  
} from '@stripe/react-stripe-js';
import { CheckoutForm } from "../components/CheckoutForm";

const options:object = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

const Checkout = () =>{
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

    return(
        <div className="flex flex-col container mt-8">
                <h1 className="text-center mb-5">Checkout</h1>
                <div className="grid grid-cols-3 items-center gap-x-10">
                <div className="col-span-2">
                <ProductCard {...PRODUCT} />
                </div>
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm/>
                </Elements>
                </div>
                

        </div>
    )
}

export default Checkout