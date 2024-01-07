import React from "react";
import Typography from "../../shared/Typography";
import Wrapper from "../../shared/Wrapper";
import FeatureCard from "../Cards/FeatureCard";
const features = [
  {
    heading: "Granny flat",
    text: "An additional $500 AUD in weekly rental income, quickly enhancing rental revenue.",
  },
  {
    heading: "Property Value Assessment",
    text: "Accurately informing you of the value of your property.",
  },
  {
    heading: "Interior Improvement",
    text: "Make your house look instantly worth an additional 300K!",
  },
  {
    heading: "Multiple Rental Income",
    text: "Long-term, short-term, subdivided rentals, comprehensively increasing the landlord's income.",
  },
  {
    heading: "Protection of Landlord Rights",
    text: "Addressing issues with bad tenants, property aging, and other hidden major risks.",
  },
  {
    heading: "Value Increase Strategy",
    text: "Development, renovation, decoration, furniture arrangement, effortlessly raise the property value.",
  },
];

const Features = () => {
  return (
    <section>
      <Wrapper styles="md:px-16 ">
        <Typography.H2 styles="text-center text-great-black">
          Featured Case Study
        </Typography.H2>
        <div className="grid grid-cols-1 custom-md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[30px] my-[30px] items-center  ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              heading={feature.heading}
              text={feature.text}
              image={`/Features/pic${index + 1}.png`}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
