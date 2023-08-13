"use client";
import React from "react";
import Image from "next/image";
import Countdown from "./../Countdown/Countdown";
import logo from "./../../public/assets/images/kodikasLogo.png";
import { Preahvihear } from "next/font/google";

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
});
const Hero = () => {
  return (
    <section className="pl-8">
      <div className="grid max-w-screen-xl px-4  mx-auto overflow-hidden lg:gap-8 xl:gap-0 lg:py-5 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className=" -ml-4 mt-7 px-8 max-w-2xl text-headerText mx-auto flex justify-center items-center text-5xl font-bold sm:text-7xl text-center mb-20 responsive-padding">
            <span className={preahvihear.className}>Kodikas-2K23</span>
          </h1>
          <h1
            className="-ml-4 px-8 max-w-2xl mx-auto -mt-16  flex justify-center items-center text-pink-500 text-3xl font-bold sm:text-l text-center mb-20 responsive-padding"
            style={{
              fontSize: "1.5 rem",
              color: "#ed3d15",
              fontFamily: "'Preahvihear', sans-serif; !important",
            }}
          >
            {/* <Image
              draggable="false"
              src="https://see.fontimg.com/api/renderfont4/9Y5Xy/eyJyIjoiZnMiLCJoIjozNSwidyI6MTI1MCwiZnMiOjI4LCJmZ2MiOiIjRjZBMTNCIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QnJhaW4gb24gRmlyZSwgSW5ub3ZhdGUgYW5kIEluc3BpcmU/loftygoals-regular.png"
              alt="heading"
              width={"480"}
              height={"72"}
            /> */}
            <span className={preahvihear.className}>
              Unlock Your Coding Potential{" "}
            </span>
          </h1>
          <Countdown />
        </div>
        <div className="lg:mt-2 pr-5 lg:col-span-5 lg:flex responsive-margin">
          {/* <VideoPlayer /> */}
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
