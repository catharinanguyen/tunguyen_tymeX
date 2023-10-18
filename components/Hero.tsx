import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="-mt-[84px]">
      <Image src="/hero-image.jpg" alt="hero" width={1920} height={804}></Image>
    </section>
  );
};

export default Hero;
