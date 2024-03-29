import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <div className="px-2 py-4 border-b text-center">
      <div className="container">
        <Link to="/" className="text-3xl  font-bold text-black hover:text-indigo-600">
          {props.title}
        </Link>
      </div>
    </div>
  );
};

export default Header;
