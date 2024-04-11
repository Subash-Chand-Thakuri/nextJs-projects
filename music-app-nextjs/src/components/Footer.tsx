import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="grid lg:grid-cols-4  sm:grid-cols-1 gap-3 mt-10 py-5 justify-items-center  px-4 text-center lg:text-left">
        <div>
          <h2
            className="text-white font-semibold text-2xl 
                mb-3"
          >
            About Us
          </h2>
          <p className="text-gray-400 mt-3">
            We are the organization who work for the cultural and musical
            diversity preservation.So, it is a part of the our principle to
            teach music lessons to the other people
          </p>
        </div>
        <div>
          <h2
            className="text-white font-semibold text-2xl 
                mb-3"
          >
            Quick Links
          </h2>
          <div className="flex flex-col text-gray-400">
            <Link href={"/"} className="hover:text-gray-200">Home</Link>
            <Link href={"/about"} className="hover:text-gray-200">About</Link>
            <Link href={"/courses"} className="hover:text-gray-200">Courses</Link>
            <Link href={"/contact"} className="hover:text-gray-200">Contact</Link>
          </div>
        </div>
        <div>
          <h2
            className="text-white font-semibold text-2xl 
                mb-3"
          >
            Follow Us
          </h2>
          <div className="flex flex-row space-x-2 text-gray-400">
            <Link href={"www.fb.com"} className="hover:text-gray-200">Facebook</Link>
            <Link href={"www.x.com"} className="hover:text-gray-200">Twitter</Link>
            <Link href={"www.instagram.com"} className="hover:text-gray-200">Instagram</Link>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-2xl mb-4">Contact Us</h2>
          <p className="text-gray-400">
            Kathmandu,Nepal
            <br />
            Email: musicart333@gmail.com
            <br />
            Phone: 123-456-789
          </p>
        </div>
      </div>
      <p className="text-center text-xs mt-2">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
