import Link from "next/link";
import { BiSolidDrink } from "react-icons/bi";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex space-x-2 items-center">
        <BiSolidDrink className="text-orange-500" size={24} />
        <h1 className={`${className} text-[25px] font-semibold`}>Juice Lab </h1>
      </div>
    </Link>
  );
};

export default Logo;
