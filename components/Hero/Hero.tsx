"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img1 from "@/images/mangojuiceImg.png";
import Img2 from "@/images/annarImg.png";
import Image from "next/image";
import OrderNow from "@/shared/OrderNow";
const Hero = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay={true}
      arrows={false}
      centerMode={false}
      infinite
      autoPlaySpeed={3000}
      itemClass="items"
      responsive={responsive}
      showDots={false}
    >
      <div className="bg-yellow-900 relative z-10 w-full h-auto md:h-[88vh] pb-6 clip_path1 flex flex-col items-center justify-center">
        <div className="w-[80%]  mt-0 md:-mt-16 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 mx-auto">
          <Image src={Img1} alt="Img1" />
          <div>
            <h2 className="text-yellow-500 font-bold uppercase text-[24px] md:text-[45px]">
              Pure Tropical Bliss
            </h2>
            <br />
            <h3 className="text-xl font-bold uppercase text-[35px] text-white -mt-2">
              Refreshingly delicious chemistry!
            </h3>
            <br />
            <h4 className="text-gray-300 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aspernatur fugit fuga sint eos accusantium voluptatum a,
              laudantium, qui illo fugiat suscipit veniam, praesentium cum!
              Mollitia, molestias quia? Expedita, tempore?
            </h4>
            <br />
            <OrderNow />
          </div>
        </div>
      </div>
      <div className="bg-red-900 w-full h-auto md:h-[88vh] pb-6 clip_path2 flex flex-col items-center justify-center">
        <div className="w-[80%] mt-0  md:-mt-16 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 mx-auto">
          <Image src={Img2} alt="Img2" />
          <div>
            <h2 className="text-yellow-500 font-bold uppercase text-[24px] md:text-[38px]">
              Refreshing Pomegranate Bliss
            </h2>
            <br />
            <h3 className="text-xl font-bold uppercase text-[35px] text-white -mt-2">
              Pouring happiness, one glass at a time!
            </h3>
            <br />
            <h4 className="text-gray-300 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aspernatur fugit fuga sint eos accusantium voluptatum a,
              laudantium, qui illo fugiat suscipit veniam, praesentium cum!
              Mollitia, molestias quia? Expedita, tempore?
            </h4>
            <br />
            <OrderNow />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
