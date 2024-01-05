import React from "react";
import Wrapper from "../../shared/Wrapper";
import Typography from "../../shared/Typography";
import { ButtonPrimary } from "../../shared/Buttons";
import Image from "next/image";

const services = [
  {
    text: "Tenants Screening",
    icon: "/artboard.svg",
  },
  {
    text: "Maintenance and Repairs",
    icon: "/mechanic.svg",
  },
  {
    text: "Property Inspections",
    icon: "/inspection.svg",
  },
  {
    text: "Market Research",
    icon: "/research.svg",
  },
  {
    text: "Dispute Addressing",
    icon: "/reconciliation.svg",
  },
];

const Services = () => {
  return (
    <section className="my-[40px] xs:my-[100px] ">
      <Wrapper styles="md:px-16">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] custom-md:gap-[30px]     ">
          {/* LEFT SIDE */}
          <div className="w-full h-full flex flex-col gap-[20px] basis-1/2">
            <div className="rounded-[5px] coral-bg px-[20px] py-[10px] max-w-max ">
              <p className="text-coral font-medium text-[14px] sm:text-[16px]  ">
                Our Core Services
              </p>
            </div>
            <div className="flex flex-col gap-[15px] sm:gap-[22px]">
              <Typography.H2>Reliable Property Care</Typography.H2>
              <Typography.PLarge styles="text-great-black font-normal leading-[25px] sm:leading-[28px] md:leading-[32px] text-[#0E0E0E]">
                At JJA Investment, our team is composed of seasoned
                professionals who are experts in the various facets of property
                management. From tenant relations and legal compliance to
                maintenance and financial oversight, we ensure every aspect of
                your property is managed with precision and care.
              </Typography.PLarge>

              <ButtonPrimary styles="bg-teal text-off-white hover:bg-teal-hover sm:w-[50%] mt-[10px]">
                Book free Consultation
              </ButtonPrimary>
            </div>
          </div>
          {/*   RIGHT SIDE */}
          <div className="mx-auto w-full h-[250px] sm:h-[380px] lg:h-full basis-1/2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Csn5JgsaAEg?si=59L2dGDFAjsyzkg8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-[50px] sm:mt-[90px] gap-[20px]">
          {services.map((service, index) => (
            <div className="flex flex-col items-center gap-[10px] " key={index}>
              <div className=" flex  ">
                <Image src={service.icon} alt="icon" width={50} height={50} />
              </div>
              <Typography.PLarge styles="text-light-black text-center font-medium">
                {service.text}
              </Typography.PLarge>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;
