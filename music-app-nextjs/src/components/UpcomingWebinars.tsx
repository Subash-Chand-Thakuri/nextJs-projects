'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    "title": "Introduction to Music Theory",
    "description": "A foundational course that covers the basics of music theory, including notation, harmony, and ear training.",
    "link": "https://musictheory.net/courses/introduction"
  },
  {
    "title": "History of Western Music",
    "description": "An expansive course exploring the development of Western music from the Middle Ages to the present day.",
    "link": "https://westernmusichistory.com"
  },
  {
    "title": "Electronic Music Production",
    "description": "A hands-on course that teaches the art of creating music using digital tools and software.",
    "link": "https://electronicmusicproduction.com"
  },
  {
    "title": "Jazz Improvisation",
    "description": "A course designed to enhance improvisational skills within the jazz genre, focusing on scales, rhythms, and solo techniques.",
    "link": "https://jazzimprovcourse.com"
  },
  {
    "title": "Music Business and Management",
    "description": "This course provides insights into the music industry, covering topics like artist management, record labels, and music marketing.",
    "link": "https://musicbusinesscourse.com"
  },
  {
    "title": "Songwriting and Composition",
    "description": "A creative course that guides students through the process of writing and composing original songs.",
    "link": "https://songwritingcomposition.com"
  }
]

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className="maxw-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
              <h2 className='text-3xl text-teal-600
                    font-semibold tracking-wide uppercase'>Featured Music</h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight
                 text-white sm:text-4xl'>Boost what you have</p>
            </div>
            <div className='mt-10'>
              <HoverEffect items={featuredWebinars.map(webinar => (
                {
                  title: webinar.title,
                  description: webinar.description,
                  link: webinar.link
                }
              ))} />
            </div>
            <div className='mt-10 text-center'>
              <Link href={"/"}
                  className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
                  hover:bg-gray-100 transition duration-200"
                  >
                  View All Webinars
              </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars