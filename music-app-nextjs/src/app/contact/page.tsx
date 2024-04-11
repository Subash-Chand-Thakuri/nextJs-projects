import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-screen overflow-hidden rounded-2xl flex flex-col items-center pt-48">

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6">
          Join With Us
        </h1>
        <p className="text-gray-500">
          Be connected,stay tuned and learn something everyday
        </p>
        <Meteors number={30} />
        <div className="mt-6 w-3/6">
          <form action="/" className="flex flex-col gap-3">
            <input type="email" placeholder="Your email address"
              className="rounded-xl py-4 px-4 bg-black text-gray-500" />
            <textarea name="desc" id="desc" cols={30} rows={10}
              className="bg-black rounded-2xl text-gray-500 py-3 px-4" 
                placeholder="Your message">
              
            </textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
