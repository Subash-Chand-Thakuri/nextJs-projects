"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Music is a more potent instrument than any other for education, because rhythm and harmony find their way into the inward places of the soul.",
    name: "Plato",
    title: "The Rhythmic Soul",
  },
  {
    quote:
      "One of the most beautiful things we can give our child is music education.",
    name: "Gloria Estefan",
    title: "The Beauty of Music in Education",
  },
  {
    quote:
      "If children hear fine music from the day of their birth and learn to play it, they develop sensitivity, discipline and endurance. They get a beautiful heart.",
    name: "Shinichi Suzuki",
    title: "Nurturing the Heart with Music",
  },
  {
    quote:
      "Music education can help spark a child's imagination or ignite a lifetime of passion.",
    name: "Hillary Clinton",
    title: "Igniting Passion Through Music",
  },
  {
    quote: "The world is in great need of more music education.",
    name: "Paul Reed Smith",
    title: "The Global Need for Music Education",
  },
  {
    quote:
      "Music education opens doors that help children pass from school into the world around them - a world of work, culture, intellectual activity, and human involvement.",
    name: "Gerald R. Ford",
    title: "Opening Doors with Music",
  },
  {
    quote:
      "Music is about communication, creativity, and cooperation, and by studying music in schools, students have the opportunity to build on these skills, enrich their lives, and experience the world from a new perspective.",
    name: "William J. Clinton",
    title: "Music: A New World Perspective",
  },
];

function TestimonialCards() {
  return (
    <div
      className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex felx-col items-center
               justify-center overflow-hidden "
    >
      <div>
        <h2
          className=" text-3xl font-bold  mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-400
            z-10 text-center "
        >
          Explore you through the music
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
