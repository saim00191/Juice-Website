import React from "react";
import Img1 from "@/images/CardImg1.png";
import Img2 from "@/images/CardImg2.png";
import Img3 from "@/images/CardImg3.png";
import Image from "next/image";

const Features = () => {
  const images = [
    {
      href: Img1,
      alt: "Img1Image",
      heading: "Sip the sunshine!",
      description:
        "Experience the zest of fresh oranges blended with a touch of sweetness.",
    },
    {
      href: Img2,
      alt: "Img2Image",
      heading: "Juice up your day!",
      description: "Rejuvenate your mornings with our refreshing apple blend.",
    },
    {
      href: Img3,
      alt: "Img3Image",
      heading: "Freshness in every sip!",
      description: "Enjoy the delightful taste of mixed berries in every drop.",
    },
  ];

  return (
    <div className="py-5 ">
      <h1 className="font-semibold uppercase text-[32px] text-center mb-6">
        <span className="font-bold text-[38px] uppercase text-green-800">
          Pure
        </span>{" "}
        &{" "}
        <span className="font-bold text-[38px] uppercase text-green-800">
          Refreshing
        </span>{" "}
        Juice Range
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="hover:bg-gray-200 hover:shadow-xl border bg-white border-gray-200 py-4 rounded-lg flex flex-col items-center text-center"
          >
            <Image
              className="object-cover w-64 h-64 rounded-lg p-2"
              src={image.href}
              alt={image.alt}
            />
            <h2 className="font-bold text-lg mt-4">{image.heading}</h2>
            <p className="text-gray-600 mt-2 px-4">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
