import React from "react";
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import Button from "./Button";


type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="container md:h-[90dvh] flex flex-col justify-center text-center md:text-left">
        <Image className="absolute -z-10 -top-[50px] -right-20 w-[1080px] md:hidden" src='/mobile-intro.svg' alt="intro-illustration" width={1080} height={463.948}/>
        <Image className="absolute -z-[5] -top-[50px] md:top-0 right-40 animate-pulse" src='/circles.svg' alt="intro-illustration" width={800} height={463.948}/>
        <Image className="hidden md:block absolute -z-10 ] -top-20 -right-6" src='/desktop-intro.svg' alt="intro-illustration" width={700} height={463.948}/>

      <h1 className="text-white mt-40 md:mt-0">
        Resume Building and <br />
        Job Listings in Perfect Harmony
      </h1>
      <p className="text-light-purple md:max-w-lg">
        Job hunting is a hustle on its own. We Provide the tools to ease the
        journey. Craft Your Career Journey with careerblob.
      </p>
      <Button href="/resume-builder" className="flex items-center gap-2 bg-cyan-blue text-dark-purple my-6 mx-auto md:mx-0">Build Your Resume <BsArrowRight /> </Button>
    </header>
  );
};

export default Hero;
