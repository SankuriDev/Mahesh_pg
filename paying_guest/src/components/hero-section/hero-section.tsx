import images from "@/images/images-export/images-export";
import Image from "next/image";

const { bedroom } = images;

export const HeroSection = () => {
  return (
    <div>
      <div>
        <Image src={bedroom} alt="logo" width={200} height={200} />
      </div>
    </div>
  );
};
