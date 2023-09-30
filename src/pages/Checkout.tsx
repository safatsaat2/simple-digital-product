import ProductCard from "../components/ProductCard"
import { PRODUCT } from "../productInfo"

type Props ={}

const Checkout = (props: Props) =>{
    return(
        <div className="flex flex-col container mt-8">
                <h1 className="text-center mb-5">Checkout</h1>
                <ProductCard {...PRODUCT} />

        </div>
    )
}

export default Checkout