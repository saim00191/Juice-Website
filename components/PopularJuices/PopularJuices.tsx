"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img1 from "@/images/PopularJuicesImg1.png";
import Img2 from "@/images/PopularJuicesImg2.png";
import Img3 from "@/images/PopularJuicesImg3.png";
import Img4 from "@/images/PopularJuicesImg4.png";
import Img5 from "@/images/PopularJuicesImg5.png";
import JuicesCards from "./JuicesCards";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularJuices = () => {
  const Images = [
    {
      title: "Mango Juice",
      href: Img1,
      alt: "Image 1",
      price: "125$",
      description:
        "Tropical bliss in a glass, bursting with sweetness and a hint of sunshine",
    },
    {
      title: "Pomegranate Juice",
      href: Img2,
      alt: "Image 2",
      price: "110$",
      description:
        "A vibrant elixir packed with antioxidants, offering a sweet-tart flavor that refreshes and rejuvenates.",
    },
    {
      title: "Sapodilla Juice",
      href: Img3,
      alt: "Image 3",
      price: "130$",
      description:
        "Creamy and naturally sweet, this juice delivers a unique flavor experience straight from the tropics.",
    },
    {
      title: "Strawberry Juice",
      href: Img4,
      alt: "Image 4",
      price: "100$",
      description:
        "Refreshing and bright, this juice captures the essence of summer with every sip.",
    },
    {
      title: "Pineapple Juice",
      href: Img5,
      alt: "Image 5",
      price: "145$",
      description:
        "A vibrant elixir packed with antioxidants, offering a sweet-tart flavor that refreshes and rejuvenates.",
    },
  ];

  return (
    <div className="py-10 relative z-10">
      <h1 className="text-[40px] font-semibold uppercase text-center">
        Our popular{" "}
        <span className="font-bold text-[45px] text-green-800">Juices</span>
      </h1>
      <div className="mt-4 mx-auto">
        <Carousel
          additionalTransfrom={0}
          autoPlay={true}
          centerMode={false}
          autoPlaySpeed={4000}
          responsive={responsive}
          itemClass="items"
          arrows={true}
        >
          {Images.map((image, index) => (
            <div key={index}>
              <JuicesCards
                title={image.title}
                image={image.href}
                price={image.price}
                description={image.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularJuices;
