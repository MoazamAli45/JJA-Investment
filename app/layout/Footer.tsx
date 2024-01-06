import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Typography from "../shared/Typography";
import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Services",
    path: "/",
  },
  {
    title: "Insight",
    path: "/",
  },
  {
    title: "Cases",
    path: "/",
  },

  {
    title: "Book Free Consultation",
    path: "/",
  },
];
const Footer = () => {
  return (
    <footer className="bg-teal">
      <Wrapper>
        {/* TOP */}
        <div className="flex flex-col xs:flex-row gap-y-[20px]  justify-between py-[50px]">
          {/* LEFT */}
          <div className="flex flex-col gap-[20px]">
            <Image src="/footer-logo.svg" alt="logo" width={170} height={50} />
            <p className="text-[13px] text-white font-normal leading:[15px] sm:leading-[19.5px] w-[55%]">
              JJA Investment is a property management agency with a focus on
              transforming properties to maximize returns.
            </p>
            <div className="flex gap-[10px]">
              <Image src="/youtube.svg" alt="youtube" width={30} height={30} />
              <Image
                src="/ticktock.svg"
                alt="ticktock"
                width={30}
                height={30}
              />
            </div>
          </div>
          {/*  RIGHT */}
          <div className="flex gap-[30px] flex-col xs:flex-row gap-y-[30px]   xs:ml-auto my-[10px] xs:my-0">
            <div className="flex gap-[20px] flex-col">
              <Typography.H3 styles="text-off-white font-normal pb-[10px]">
                Quick Links
              </Typography.H3>
              <ul className="flex flex-col gap-[20px]">
                {links.map((link, index) => (
                  <Typography.PSmall
                    styles="text-off-white font-normal"
                    key={index}
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </Typography.PSmall>
                ))}
              </ul>
            </div>
            <div className="flex gap-[20px] flex-col">
              <Typography.H3 styles="text-off-white font-normal pb-[10px]">
                Free Downloads
              </Typography.H3>
              <ul className="flex flex-col gap-[20px]">
                <Typography.PLarge styles="text-off-white font-normal md:w-[80%]">
                  <Link href="/">
                    18 Types of Hidden Income from Australian Real Estate
                  </Link>
                </Typography.PLarge>
                <Typography.PLarge styles="text-off-white font-normal md:w-[80%]">
                  <Link href="/">
                    Make Your House Earn an Extra $10,000 Each Year
                  </Link>
                </Typography.PLarge>
                <Typography.PLarge styles="text-off-white font-normal md:w-[80%]">
                  <Link href="/">
                    18 Indicators You Must Consider Before Buying a House in
                    Australia
                  </Link>
                </Typography.PLarge>
              </ul>
            </div>
          </div>
        </div>
        {/*  BOTTOM */}
        {/*
        <div className="flex flex-col gap-y-[10px] xs:flex-row items-center justify-between pt-[20px] pb-[30px] border-t-[1px] border-solid border-off-white ">
          <Typography.PSmall styles="text-off-white font-normal">
            © Copyright & Create with love by Azis Maliek
          </Typography.PSmall>
          <div className="flex gap-[20px]">
            <Typography.PSmall styles="text-off-white font-normal">
              Terms & Conditions
            </Typography.PSmall>
            <Typography.PSmall styles="text-off-white font-normal">
              Privacy Policy
            </Typography.PSmall>
          </div>
        </div>
                */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
