import {useNavigate} from "react-router-dom"
import Banner from "../components/Banner";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  images: Image[];
  price?: number;
};

const Product = (props: Props) => {

    const navigate = useNavigate()

    const handlePaylick = () =>{
        navigate("/checkout");
    }
  return (
    <>
    <div className="bg-gray-200" >
      <Banner title="BRING YOUR SKILLS INTO LIFE BY" title2=" OUR COURSE" />
    </div>
    <h1 className="text-center font-bold mt-10">Product</h1>
    <div className="sm:container lg:w-1/2 p-0 mt-5 mb-10 border rounded" >
      <div className="">
        <img src={props.images[0].src} alt={props.images[0].alt} />
      </div>
      <div className="" >
        <h1 className="text-4xl font-bold border-b p-6">{props.title}</h1>
        <p className="text-gray-900 p-6">{props.description}</p>
      </div>
      <div className="border-l p-6 flex flex-col">
        <button id="product" onClick={handlePaylick} className="bg-indigo-500 text-white hover:bg-indigo-600 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] focus:outline-none border-gray-900 hover:border-gray-900 border-2">Buy Now</button>
      </div>
    </div>
    </>
    
  );
};

export default Product;
