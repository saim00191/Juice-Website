import { IoMdCall } from "react-icons/io";

const Text = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center p-4 text-white ml-4 md:ml-8">
      <h2 className="text-3xl md:text-4xl text-center md:text-left font-semibold leading-tight">
        Sip into Freshness
      </h2>
      <h4 className="text-xl md:text-2xl mt-2 font-medium text-center md:text-left">
        Book Your Blend Now!
      </h4>
      <p className="mt-4 text-lg md:text-xl sm:mx-24 md:mx-0 text-gray-800 leading-relaxed">
        Indulge in a refreshing journey of flavors with our expertly crafted
        juices. Experience the vibrant taste of nature’s finest ingredients,
        delivered right to your table. Reserve your personalized blend today and
        elevate your wellness with every sip!
      </p>
      <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
        <IoMdCall size={35} className="rounded-full p-2 bg-green-900" />
        <div className="flex flex-col ">
          <span className="text-white text-xl">Order Now</span>
          <span className="text-[25px] font-bold text-yellow-400 -mt-1">
            +0123 456 789
          </span>
        </div>
      </div>
    </div>
  );
};

export default Text;
