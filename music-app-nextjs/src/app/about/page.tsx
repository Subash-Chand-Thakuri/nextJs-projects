"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Span } from "next/dist/trace";

const words1 = `Unleash the symphony within you and let your soul sing with our comprehensive music course. Dive into a world where melodies blend with passion, where every note guides you to musical mastery.`;
const words2 =
  "Elevate your skills, embrace the rhythm of learning, and orchestrate your future. Tune into excellence – Your journey to becoming a maestro starts here! 🎵🎼";

function page() {
  return (
    <div>
      <div className="relative  bg-blue-950 border border-gray-800  px-4 py-8 h-screen overflow-hidden flex flex-col justify-center items-center text-center ">
        <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-tl from-green-500 via-blue-500 to-yellow-500 font-bold font-sans mb-4">
          Role Of US
        </h2>
       <div className="flex flex-col w-1/2">
       <div className="bg-gray-900 rounded-full p-8">
          <TextGenerateEffect words={words1} />
        </div>
        <div className="p-8">
          <TextGenerateEffect words={words2} />
        </div>
        </div> 
      </div>
    </div>
  );
}

export default page;
