import React from "react";
import Wrapper from "../../shared/Wrapper";
import Image from "next/image";
import Typography from "../../shared/Typography";
import TestimonialCard from "../Cards/TestimonialCard";
const reviews = [
  {
    text: "Proudly, we are more than just a basic property management agency; we are your strategic partner in real estate investment growth.",
    name: "James Cordornd",
    location: "Glen Waverley, VIC",
  },
  {
    text: "Proudly, we are more than just a basic property management agency; we are your strategic partner in real estate investment growth.",
    name: "James Cordornd",
    location: "Glen Waverley, VIC",
  },
  {
    text: "Proudly, we are more than just a basic property management agency; we are your strategic partner in real estate investment growth.",
    name: "James Cordornd",
    location: "Glen Waverley, VIC",
  },
];

const Testimonial = () => {
  return (
    <section className="my-[80px]">
      <Wrapper>
        <div className="flex gap-[15px] items-center">
          <span className="flex items-center justify-center bg-teal  w-[100px] h-[100px]">
            <Image src={"/comma.svg"} alt="Comma" width={44} height={37} />
          </span>
          <Typography.H2>What Our Clients Are Saying</Typography.H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-[30px] mt-[60px]">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              image="/avatar.png"
              text={review.text}
              name={review.name}
              location={review.location}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
