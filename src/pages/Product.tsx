import {useNavigate} from "react-router-dom"

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
    <div className="container p-0 mt-10 border-l border-r border-b rounded grid grid-cols-3">
      <div className="col-span-3">
        <img src={props.images[0].src} alt={props.images[0].alt} />
      </div>
      <div className="col-span-2">
        <h1 className="text-4xl font-bold border-b p-6">{props.title}</h1>
        <p className="text-gray-900 p-6">{props.description}</p>
      </div>
      <div className="border-l p-6 flex flex-col">
        <button onClick={handlePaylick} className="bg-indigo-500 text-white hover:bg-indigo-600 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] focus:outline-none border-gray-900 hover:border-gray-900 border-2">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
