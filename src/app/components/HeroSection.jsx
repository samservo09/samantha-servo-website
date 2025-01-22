"use client";

import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-10 lg:px-20 gap-y-8">
        {/* Text Section */}
        <div className="col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-[#687771] mb-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-normal lg:leading-snug">
            <span className="text-transparent bg-clip-text bg-[#002347]">
              Samantha Servo {" "}
            </span>
            <TypeAnimation
              sequence={[
                "Data Science",
                2000,
                "AI/ML",
                2000,
                "Cloud Engineering",
                2000,
                "Technical Writing",
                2000,
                "Research",
                2000,
                "Bioinformatics",
                2000,
                "BEYOND THE VINCULUM :>",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#687771] text-sm sm:text-lg mb-6 lg:mb-8 lg:text-xl leading-relaxed max-w-lg">
            I consider myself an <strong>autodidact</strong> and{" "}
            <strong>multipotentialite</strong>. An outlier,{" "}
            <strong>beyond the vinculum!</strong> Why those things? I love
            teaching myself (autodidact) about the different interests
            (multipotentialite) that I have.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-[#002347] hover:bg-[#687771] text-[#f1f5f3]">
              Work With Me
            </button>
            <button className="px-1 py-1 w-full md:w-auto sm:w-auto rounded-full bg-[#002347] hover:bg-[#687771] text-[#687771]">
              <span className="block bg-[#f1f5f3] hover:bg-[#687771] text-[#002347] hover:text-[#f1f5f3] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 flex justify-center items-center">
          <div className="rounded-full bg- w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/herosec-img-3.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
