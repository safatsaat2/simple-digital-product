import { Product } from "../type"

const ProductCard = (props: Product) =>{
    return (
        <div className="border rounded px-4 py-8 flex gap-x-10 items-center h-min ">
            <img className="w-[300px] h-[200px]" src={props.image} alt={`${props.title} Image`} />
            <div className="flex-grow flex flex-col">
                <div className="pl-4">
                <h3 className="text-2xl font-bold">{props.title}</h3>
                <p className="text-gray-900 mt-4">{props.description}</p>
                </div>
            </div>
            <div>
            <p>${props.price}</p>
            </div>
        </div>
    )
}

export default ProductCard