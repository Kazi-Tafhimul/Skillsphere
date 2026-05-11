import InstructorsData from "@/data/instructors.json";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

const Instructors = () => {
    return (
        <div className="py-20 bg-base-100">
            
            <div className="container mx-auto px-4"> 
                <div className="flex justify-center items-center flex-col mb-16">
                    <div className="flex gap-3 items-center justify-center">
                        <FaTrophy className="text-yellow-400 text-3xl "/>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Top Instructors
                        </h2>
                    </div>
                    <p className="text-gray-500 mt-2 text-lg text-center">
                        Learn from the best in the industry
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {InstructorsData.map((instructor, index) => (
                        <div 
                            key={index} 
                            className="card bg-base-100 w-full shadow-md border border-base-200 transition-all hover:shadow-xl"
                        >
                            <figure className="px-10 pt-10">
                                
                                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                    <Image
                                        src={instructor.image}
                                        alt={instructor.name}
                                        fill 
                                        className="object-cover" 
                                    />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-xl font-bold">{instructor.name}</h2>
                                <p className="text-primary font-medium">{instructor.role}</p>
                                <p className="text-gray-600 text-sm mt-2">{instructor.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;