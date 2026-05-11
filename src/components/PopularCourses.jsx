import courses from "@/data/courses.json"
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

const PopularCourses = () => {
    const topRatedCourses = [...courses].sort((a,b)=>b.rating-a.rating).slice(0,3);

    return (
        <div className="py-16 bg-base-100">
            <div className="container mx-auto px4">
                <div className="text-center mb-12">
                    <h1 className="text3xl md:text-4xl font-bold">
                        Popular Courses
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Explore our highly rated courses
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topRatedCourses.map((course)=>(
                        <div key={course.id} className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden hover:shadow-2xl transition-shadow">
                            <figure className="h-48">
                                <Image src={course.image} alt={course.title} 
                                width={500}
                                height={500}
                                className="h-48 w-full object-cover"/>

                            </figure>
                            <div className="card-body p-6">
                                <h1 className="card-title text-xl mb-1">
                                    {course.title}
                                </h1>
                                <p className="text-sm text-gray-600 mb-2">
                                    By {course.instructor}
                                </p>
                                <div className="flex items-center gap-4">
                                    <CiStar/>
                                    <span className="font-bold">{course.rating}</span>
                                     <div className="card-actions justify-end">

                                        <button className="btn btn-primary"><Link href={`/courses/$course.id`}></Link>View Detils</button>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default PopularCourses;