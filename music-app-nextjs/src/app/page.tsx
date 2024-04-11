import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased 
      bg-grid-white/[0.02]">
     
     <HeroSection />
     <FeaturedCourses />
     <WhyChooseUs />
     <TestimonialCards />
     <UpcomingWebinars />
     <Instructors />
     <Footer />
   </main>
  );
}
