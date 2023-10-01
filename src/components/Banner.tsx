import { Link } from "react-router-dom";

type Props = {
  title: string;
  title2: string;
};

const Banner = (props: Props) => {
  return (
    <div className="px-2 py-20 border-b">
      <div className="container grid grid-cols-4">
          <h1 className="col-span-3 text-[100px] z-10">
          {props.title}
          <br />
          <span className="text-indigo-600">{props.title2}</span>
          </h1>
          <div className="flex flex-col justify-between">
            <div className="rounded-full w-[300px] h-[300px] -ml-10 -mt-10 z-0 shape">

            </div>
            <Link className="bg-indigo-600 ml-5 mt-2 text-white rounded-md p-2 text-center transition-all duration-500" to="#product">See Product</Link>
          </div>
          
      </div>
    </div>
  );
};

export default Banner;
