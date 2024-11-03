import { BiCycling } from "react-icons/bi";

const OrderNow = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-3 bg-blue-900 hover:bg-red-600 rounded-md text-white font-semibold transition-colors">
      <BiCycling size={24} />
      <span className="flex">Order Now</span>
    </button>
  );
};

export default OrderNow;
