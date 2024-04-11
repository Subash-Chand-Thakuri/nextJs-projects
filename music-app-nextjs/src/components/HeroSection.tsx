import Link from "next/link";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded flex flex-col items-center justify-center 
        relative overflow-hidden mx-auto py-10 md:py-0"
    >
       
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >Get A Proficiency In Music</h1>
        <p className="mt-4 font-normal text-base md:text-lg
            text-neutral-300 max-w-xl mx-auto">
          Unlock the rhythm within you and discover the joy of music with our
          engaging music classes! Whether you’re a budding Beethoven or a
          hopeful Hendrix, our expert instructors will guide you through every
          note and chord. Our classes cater to all levels, from absolute
          beginners to advanced maestros, ensuring personalized attention that
          resonates with your musical aspirations. With state-of-the-art
          facilities and a curriculum that covers a wide range of instruments
          and genres, your musical journey promises to be as enriching as it is
          exciting. Enroll now and let your musical story begin! 🎶🎹🎸
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
