import Container from "@/shared/Container";
import Image1 from "@/images/TeamMember1.png";
import Image2 from "@/images/TeamMember2.png";
import Image3 from "@/images/TeamMember3.png";
import Image from "next/image";

const Teams = () => {
  const Images = [
    { name: "Oliver Reed", position: "Head Chef", image: Image1 },
    { name: "Lily Morgan", position: "Trainer", image: Image2 },
    { name: "Levi Archer", position: "Junoir Chef", image: Image3 },
  ];
  return (
    <div className="py-10 z-10 relative">
      <Container>
        <h1 className="text-[32px] font-semibold uppercase text-center">
          Our <span className="text-green-600 text-[38px] font-bold">Team</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {Images.map((image, index) => (
            <div key={index} className="mb-10">
              <div className="flex items-center justify-center">
                <Image
                  className="w-72 h-80 shadow-lg rounded-md"
                  src={image.image}
                  alt={image.name}
                />
              </div>
              <h3 className="text-center text-xl mt-1 font-medium tracking-wide">
                {image.name}
              </h3>
              <p className="text-center text-[16px] text-gray-500">
                {image.position}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Teams;
