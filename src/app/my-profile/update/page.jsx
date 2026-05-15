"use client";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const router = useRouter();
    const {data:session} = authClient.useSession();
    useEffect(() =>{
        if(!session){
            router.push("/login");
        }
    },[session,router]);
    const handleUpdate = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const image = formData.get("photo");
        const {data, error} = await authClient.updateUser({
            name:name,
            image:image
        });
        if(error){
            return toast.error("Update failed");
        }
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
                <input name='name' type="text" className='input mb-4' defaultValue={session?.user?.name} required />
                <label className='label'>Image URL</label>
                <input name='photo' type="url" className='input mb-4' defaultValue={session?.user?.image} required />
                <button className='btn btn-primary'>Update Information</button>
            </form>
            
        </div>
    );
};

export default UpdateProfile;
