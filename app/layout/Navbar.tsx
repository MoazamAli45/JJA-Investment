"use client";
import React, { useState } from "react";
import Image from "next/image";

import Wrapper from "../shared/Wrapper";
import Typography from "../shared/Typography";
import { ButtonPrimary } from "../shared/Buttons";
import { IoMenu, IoClose } from "react-icons/io5";

//  react modern drawer
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/",
  },
  {
    title: "Features",
    path: "/",
  },
  {
    title: "Cases",
    path: "/",
  },
  {
    title: "Insights",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Wrapper>
        <header className="flex justify-between items-center py-4 sm:py-6">
          <div className="flex items-center">
            <Image src="/planet-earth.svg" alt="Logo" width={40} height={40} />
            <Typography.PLarge styles="ml-2">JJA Investment</Typography.PLarge>
          </div>
          <nav className="hidden custom-md:flex items-center gap-[35px] ">
            {navLinks.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="text-[12px] sm:text-[14px] leading-[17px] text-light-black font-normal"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <ButtonPrimary styles="hidden custom-md:block  bg-teal text-off-white hover:bg-[#005050]">
            {" "}
            Free Consultation
          </ButtonPrimary>
          <span className=" block custom-md:hidden">
            <IoMenu className="text-2xl" onClick={toggleDrawer} />
          </span>
        </header>
      </Wrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={"100%"}
        className="sm:w-[100vw]  md:w-[40vw] flex flex-col justify-center align-middle"
      >
        <div className="flex flex-col h-[95%] my-auto justify-center gap-[4rem] align-middle text-center">
          <div className="flex justify-end mr-[1rem]">
            <IoClose onClick={() => setIsOpen(false)} className="text-2xl" />
          </div>
          <nav className=" flex flex-col justify-start align-middle gap-[3rem]  basis-[80%]  my-[6rem]">
            <ul className="text-[#001A23] flex flex-col align-middle gap-6 ">
              {navLinks.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className="text-[12px] sm:text-[14px] leading-[17px] text-light-black font-normal"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
            <div>
              <ButtonPrimary styles="bg-teal text-off-white hover:bg-[#005050]">
                {" "}
                Free Consultation
              </ButtonPrimary>
            </div>
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
