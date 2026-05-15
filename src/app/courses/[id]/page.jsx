"use client";
import { useParams } from "next/navigation";
import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";



const CourseDetailsPage = () => {
    const {id} = useParams();
    const router = useRouter();
    const course = courses.find((c)=>c.id === parseInt(id));
    const {data:session} = authClient.useSession();
    useEffect(()=>{
        if(!session){
            toast.error("Please login to see the course details");
            router.push("/login");
        }
    },[session,router]);
    if(!session) return null;
    if(!course){
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">
                    Course not found
                </h1>
                <Link href="/courses" className="btn btn-primary mt-4">Back to Courses</Link>
            </div>
            
        )
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/courses" className="btn btn-link mb-6 ">Back To Courses</Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <figure className="relative rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-[450px] w-full">
                        <Image src={course.image} alt={course.title} fill className="object-cover"/>
                    </div>

                </figure>
                <div>
                    <div className="badge badge-primary mb-4">{course.category}</div>
                    <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                    <p className="text-xl text-gray-600 mb-6">{course.description}</p>
                    <div className="stats shadow bg-base-200 w-full mb-8">
                        <div className="stat">
                            <div className="stat-title">
                                Instructor 
                            </div>
                            <div className="stat-value text-lg">{course.instructor}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Duration</div>
                            <div className="stat-value text-lg">{course.duration}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Rating</div>
                            <div className="stat-value text-lg flex justify-center items-center"><FaStar className="text-yellow-400"/>{course.rating}</div>
                        </div>
                      

                    </div>
                      <button className="btn btn-primary btn-lg w-full">Enroll Now</button>
                </div>

            </div>

            
        </div>
    );
};

export default CourseDetailsPage;