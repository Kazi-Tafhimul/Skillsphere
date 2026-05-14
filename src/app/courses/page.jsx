"use client";

import { useState } from "react";
import courses from "@/data/courses.json";

import Image from "next/image";
import Link from "next/link";

const AllCoursePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All",...new Set(courses.map((c)=>c.category))];
    const filteredCourse = courses.filter((course)=>{
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    })
    return (
        <div className="bg-base-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold">
                            All Courses
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Find the perfect path for your journey
                        </p>
                    </div>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
            </g>
    </svg>
        <input type="search" required placeholder="Search"
        value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}/>
        </label>
             </div>
        <details className="dropdown">
        <summary className="btn m-1">Category:{selectedCategory}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {
                categories.map((cat)=>(
                    <li key={cat}>
                        <button className={selectedCategory === cat ? "active" :""}
                        onClick={(e) =>{
                            setSelectedCategory(cat);
                            e.currentTarget.closest("details").removeAttribute("open");
                        }}
                        >
                            {cat}

                        </button>

                    </li>
                ))
            }
        </ul>
        </details>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {filteredCourse.map((course,id) => (
                <div key={id} className="card bg-base-100  shadow-sm">
                <figure className="h-48 relative">
                    <Image 
                    src={course.image}
                    alt={course.title}
                    height={300}
                    width={300}
                    className="object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{course.title}</h2>
                    <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                    <p>{course.description}</p>
                    <div className="card-actions justify-end">
                    <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm">
                    Details</Link>
                    </div>
                </div>
                </div>
            ))}
        </div>
        {filteredCourse.length===0 && (
            <div className="text-center py-20 text-gray-400">
                No courses found
            </div>
        )}

        </div>



            
        </div>
    );
};

export default AllCoursePage;