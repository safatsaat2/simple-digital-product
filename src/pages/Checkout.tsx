import ProductCard from "../components/ProductCard"
import { PRODUCT } from "../productInfo"
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { CheckoutForm } from "../components/CheckoutForm";

type Props ={}
const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

const Checkout = (props: Props) =>{
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

    return(
        <div className="flex flex-col container mt-8">
                <h1 className="text-center mb-5">Checkout</h1>
                <div className="grid grid-cols-3 items-center gap-x-20">
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