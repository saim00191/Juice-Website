"use client";
import { RiEBike2Fill } from "react-icons/ri";
import { GiManualJuicer } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import DeliveryBoyImage from "@/images/DeliveryBoy.png";
import Container from "@/shared/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Delivery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      } else {
        setIsVisible(false);
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="py-10">
      <Container className="mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 " ref={imageRef}>
            <Image
              src={DeliveryBoyImage}
              alt="DeliveryBoyImage"
              width={400}
              height={300}
              className={`w-full h-auto max-w-[500px] mx-auto animate-bike  ${
                isVisible ? "slide-in" : ""
              } `}
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-4 justify-center">
            <h2 className="font-semibold text-[26px] md:text-[36px]">
              Your{" "}
              <span className="uppercase font-bold text-[32px] md:text-[40px] text-green-500">
                Favorite Juice
              </span>{" "}
              On the Way
            </h2>
            <p className="mt-1 text-lg">
              Juice on the move! 🍏✨ We’re thrilled to deliver the finest,
              freshest juices right to your door. Experience the convenience of
              deliciousness with every order and savor the essence of health in
              every drop!
            </p>
            <div>
              <div className="flex items-center">
                <RiEBike2Fill className="w-[2rem] h-[2rem] text-green-500" />
                <span className="ml-2">Delivering Fresh Juices</span>
              </div>
              <div className="flex items-center mt-6">
                <GiManualJuicer className="w-[2rem] h-[2rem] text-green-500" />
                <span className="ml-2">Quality Ingredients</span>
              </div>
              <div className="flex items-center mt-6">
                <FaDoorOpen className="w-[2rem] h-[2rem] text-green-500" />
                <span className="ml-2">Easy Pickup & Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
