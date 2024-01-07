import React from "react";
import Typography from "../../shared/Typography";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../shared/Wrapper";

const links = [
  {
    text: "18 Types of Hidden Income from Australian Real Estate",
  },
  {
    text: "Make Your House Earn an Extra $10,000 Each Year",
  },
  {
    text: "18 Indicators You Must Consider Before Buying a House in Australia",
  },
];

const tips = [
  {
    text: "How to quickly enhance the property's value to refinance and cash out?",
  },
  {
    text: "Are there any other hidden ways to make money from my house?",
  },
  {
    text: "Is now a good time to buy a property?",
  },
  {
    text: "Planning to sell the house and hoping to sell it at a better price?",
  },
  {
    text: "Want to organize the entire property investment portfolio to make it more profitable overall?",
  },
];

const Discover = () => {
  return (
    <section className="my-[60px] md:my-[90px]">
      <Wrapper styles="md:px-16">
        <div className="flex flex-col flex-wrap lg:flex-nowrap  md:flex-row gap-y-[20px] gap-x-[20px]">
          {/* LEFT */}
          <div className="flex flex-col gap-[20px]">
            {/*   TODO ALSO ASK FROM CLIENT ABOUT THIS BACKGROUND */}
            <div className=" rounded-[5px] coral-bg px-[20px] py-[10px] max-w-max">
              <h4 className="text-coral font-medium text-[14px] sm:text-[16px] ">
                Why Us: Discover the Difference
              </h4>
            </div>
            <Typography.H2>
              A Property Manager That Can Answer you…
            </Typography.H2>
            <div className="flex gap-[10px] my-[20px]  flex-wrap gap-y-[20px] items-center justify-center sm:justify-start">
              {links.map((link, index) => (
                <button
                  key={index}
                  className="flex flex-col gap-[20px]  link-box  h-[150px] w-[150px] p-[20px] items-center sm:items-start "
                >
                  <Image
                    src="/document.svg"
                    alt="document"
                    width={32}
                    height={32}
                    priority
                  />
                  <Link
                    href={"/"}
                    className="text-teal hover:text-[rgba(0, 80, 80, 1)] underline text-[10px]   link-bg md:text-start "
                  >
                    {link.text}
                  </Link>
                </button>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col gap-[10px]">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`flex gap-[10px]  py-[15px] link-border ${
                  index === tips.length - 1 ? "link-border-bottom" : " "
                }`}
              >
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={32}
                  height={32}
                  priority
                />
                <Typography.PSmall>{tip.text}</Typography.PSmall>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Discover;
