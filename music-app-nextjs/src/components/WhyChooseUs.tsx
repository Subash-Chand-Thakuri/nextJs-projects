"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchooContents = [
    {
        "title": "Virtuoso Music Academy",
        "description": "Virtuoso Music Academy offers a diverse range of music courses designed to inspire and nurture musical talent across all ages. Our experienced instructors are dedicated to providing personalized instruction in a supportive environment."
      },
      {
        "title": "Allegro Arts Academy",
        "description": "Allegro Arts Academy's dynamic teaching approach encourages creativity and expression, ensuring each student's journey in music is as unique as their fingerprint."
      }
      ,
      {
        "title": "Prelude Performing Arts Center",
        "description": "Prelude Performing Arts Center is dedicated to the performing arts, offering a stage for students to hone their craft and perform in front of live audiences."
      }
        ,      
        {
            "title": "Forte Fine Arts School",
            "description": "Forte Fine Arts School stands at the intersection of tradition and innovation, blending time-honored techniques with modern music technology."
          }
          ,
          {
            "title": "Rhythmic Harmony Institute",
            "description": "Rhythmic Harmony Institute specializes in cultivating rhythmic precision and harmonic understanding, offering specialized programs for percussion and wind instruments."
          }
        ,
        {
            "title": "Rhythmic Harmony Institute",
            "description": "Rhythmic Harmony Institute specializes in cultivating rhythmic precision and harmonic understanding, offering specialized programs for percussion and wind instruments."
          }
                      
      
]

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchooContents} />
    </div>
  )
}

export default WhyChooseUs