import React from "react";
// import { HeroText } from "./HeroText";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { SparklesCore } from "./ui/sparkles";

const intro = "Believe me, I am a Software Developer.";

const description =
  "Meet Rohit Kumar Yadav, a skilled MERN stack developer with a deep expertise in building dynamic web applications. Known for his proficiency in MongoDB, Express, React, and Node.js, he crafts innovative and efficient solutions for the IT industry. With a passion for problem-solving and creating seamless user experiences, Rohit continues to make a significant impact in the tech world.";

const HeroSection = () => (
  <div className="w-full flex items-center justify-between h-screen">
    <Spotlight className="-top-40 left-10 md:left-60 md:-top-20" fill="wheat" />
    <div className="w-[65%] flex flex-col justify-center h-full space-y-10 text-center text-pretty p-5">
      <div>
        <TextGenerateEffect words={intro} />
      </div>
      <div className="px-20">
        <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-black">
          <p className="text-[1rem] text-neutral-600 dark:text-neutral-400 text-left">
            {description}
          </p>
          <p className="text-[0.9rem] text-left mt-5 text-neutral-200">
            ~ an introduction by ChatGPT
          </p>
        </BackgroundGradient>
      </div>
    </div>
    <div className="w-[35%] flex justify-center items-center h-full pr-10">
      <div className="h-[35rem] mt-20 w-[400px] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Image
          className="object-cover w-[300px] h-full rounded-xl"
          src="/prof_pic.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
        />
        <div className="flex justify-evenly items-center w-full h-20 mt-5 mb-5">
          <div>
            <Image
              className="object-cover w-[30px] h-full rounded-xl"
              src="/instagram.svg"
              alt="Instagram Picture"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="object-cover w-[30px] h-full rounded-xl"
              src="/facebook.svg"
              alt="Facebook Picture"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="object-cover w-[30px] h-full rounded-xl"
              src="/mail.svg"
              alt="Email Picture"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="object-cover w-[30px] h-full rounded-xl"
              src="/linkedin.svg"
              alt="LinkedIn Picture"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="object-cover w-[30px] h-full rounded-xl"
              src="/x.svg"
              alt="X Picture"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="w-[30rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
    {/* <HeroText /> */}
  </div>
);

export default HeroSection;
