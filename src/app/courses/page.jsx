"use client";

import { useState } from "react";
import courses from "@/data/courses.json";

const AllCoursePage = () => {
    const [searchQuery, SetSearchQuery] = useState("");
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
        <input type="search" required placeholder="Search" />
        </label>
                </div>

            </div>


            
        </div>
    );
};

export default AllCoursePage;