import { Link } from "react-router-dom";

type Props = {
  title: string;
  title2: string;
};

const Banner = (props: Props) => {
  return (
    <div className="px-2 py-20 border-b">
      <div className="container grid grid-cols-4 items-end">
          <h1 className="col-span-3 text-[100px]">
          {props.title}
          <br />
          <span className="text-indigo-600">{props.title2}</span>
          </h1>
          <Link className="bg-indigo-600 ml-5 mt-2 text-white rounded-md p-2 text-center transition-all duration-500" to="#product">See Product</Link>
      </div>
    </div>
  );
};

export default Banner;
