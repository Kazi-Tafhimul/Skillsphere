
import React from 'react';
import { FaBookReader, FaClock, FaLightbulb, FaRegLightbulb, FaRocket } from 'react-icons/fa';

const LearningTips = () => {
    const tips = [
        {
            icon:<FaLightbulb className='text-yellow-500'/>,
            title:"Study Techniques",
            description: "Use the Pomodoro technique: study for 25 minutes, then take a 5-minute break to stay fresh."
        },
        {
            icon:<FaClock className='text-blue-500'/>,
            title: "Time Management",
            description: "Schedule your hardest subjects during your peak energy hours for maximum retention."
        },
        {
            icon: <FaBookReader className="text-green-500" />,
            title: "Active Recall",
            description: "Instead of just re-reading, try to summarize what you learned in your own words."
        },
        {
            icon: <FaRocket className="text-purple-500" />,
            title: "Consistent Practice",
            description: "Learning is a marathon. 30 minutes every day is better than a 5-hour cram session once a week."
        }
    ]
    return (
        <div className='container mx-auto bg-base-200'>
            <div className='text-center mb-12'>
                <div className='flex items-center justify-center gap-3 mt-4'>
                <FaLightbulb className='text-3xl md:text-4xl font-bold'/>

                <h1 className='text-3xl md:text-4xl font-bold'> Learning Tips</h1>
               
                </div>
                 <p className='text-gray-500 mt-2'>
                    Boost your efficiency with these proven methods
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {tips.map((tip,index)=>(
                    <div key={index} className="card w-full bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Large Card</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            

            
        </div>
    );
};

export default LearningTips;