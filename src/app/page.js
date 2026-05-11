import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <div className="space-y-10 mb-10">
      <Hero></Hero>
      <PopularCourses></PopularCourses>
      

    
    </div>
  );
}
 