"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const router = useRouter();
    const handleUpdate = (e) =>{
        e.preventDefault();
        toast.success("Information Updated!");
        router.push("/my-profile");

    }

    return (
        <div className='container mx-auto p-6 flex justify-center'>
            <form onSubmit={handleUpdate} className='card w-full max-w-md bg-base-100 border p-8 shadow-lg'>
                <h1 className='text-xl font-bold mb-6'>
                    Update Profile
                </h1>
                <label className='label'>Name</label>
                <input name='name' type="text" className='input mb-4' required />
                <label className='label'>Image URL</label>
                <input name='photo' type="url" className='input mb-4' required />
                <button className='btn btn-primary'>Update Information</button>
            </form>
            
        </div>
    );
};

export default UpdateProfile;
