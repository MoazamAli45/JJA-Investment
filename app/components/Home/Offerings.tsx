import React from "react";
import Typography from "../../shared/Typography";
import Image from "next/image";
import Wrapper from "../../shared/Wrapper";

const offerings = [
  {
    text: "Curb Appeal Enhancement",
    image: "/Offerings/pic1.png",
  },
  {
    text: "Interior Painting",
    image: "/Offerings/pic2.png",
  },
  {
    text: "Upgrade Fixtures and Hardware",
    image: "/Offerings/pic3.png",
  },
  {
    text: "Kitchen and Bathroom Improvements ",
    image: "/Offerings/pic4.png",
  },
  {
    text: "Flooring",
    image: "/Offerings/pic5.png",
  },
  {
    text: "Maximize Space and Light",
    image: "/Offerings/pic6.png",
  },
  {
    text: "Professional Cleaning",
    image: "/Offerings/pic7.png",
  },
  {
    text: "Furnish and Staging",
    image: "/Offerings/pic8.png",
  },
];

const Offerings = () => {
  return (
    <section className="bg-teal">
      <Wrapper styles="md:px-16 py-[60px] md:py-[80px]">
        {/*  TOP  */}
        <div className="flex  justify-between flex-col sm:flex-row gap-[15px] sm:gap-0">
          <div className="flex flex-col gap-[10px] basis-1/2">
            <div className=" py-[10px] px-[20px] bg-[rgba(250,249,246,.15)] rounded-[5px] max-w-max">
              <Typography.PSmall styles="text-off-white font-medium">
                Value-Added Offerings
              </Typography.PSmall>
            </div>
            <Typography.H2 styles="text-off-white sm:w-[70%]">
              Unlock Your Property Potential
            </Typography.H2>
          </div>
          <div className="basis-1/2">
            <Typography.PSmall styles="text-off-white  leading-[28px]">
              Proudly, we are more than just a basic property management agency;
              we are your strategic partner in real estate investment growth.
              With a focus on transforming properties to maximize returns, we
              bring a unique and innovative approach to each project we
              undertake.
            </Typography.PSmall>
          </div>
        </div>
        {/*  BOTTOM PICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-[40px] gap-x-[20px] gap-y-[25px]">
          {offerings.map((offer, index) => (
            <div className="flex flex-col items-center gap-[10px] " key={index}>
              <div className=" flex justify-center items-center">
                <Image src={offer.image} alt="icon" width={260} height={150} />
              </div>
              <Typography.PLarge styles="text-off-white">
                {offer.text}
              </Typography.PLarge>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Offerings;
