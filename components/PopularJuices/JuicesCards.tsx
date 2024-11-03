import Image, { StaticImageData } from "next/image";

type ImageSource = StaticImageData;

interface Props {
  image: ImageSource;
  title: string;
  price: string;
  description: string;
}

const JuicesCards = ({ image, title, price, description }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 h-[400px] max-w-[300px] mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        className="w-60 h-48 rounded-t-lg"
        src={image.src}
        alt={title}
        width={300}
        height={200}
      />
      <h2 className="text-lg font-bold mt-2 text-center uppercase">{title}</h2>
      <p className="text-green-600 text-xl font-semibold mt-1">{price}</p>
      <p className="text-gray-700 text-center mt-2">{description}</p>
    </div>
  );
};

export default JuicesCards;
