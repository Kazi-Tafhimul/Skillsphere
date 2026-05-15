"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MyProfilePage = () => {
    const router = useRouter();
    const {data:session, isPending} = authClient.useSession();
    useEffect(()=>{
        if(!isPending && !session){
            router.push("/login");
        }
    },[session,isPending,router])
    
   const user = session?.user;

    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <div className="card w-96 bg-base-200 shadow-xl p-8 items-center">
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
                        <img src={user?.image} 
                        alt="Profile" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className="mb-6">{user?.email}</p>
                
                
                <Link href="/my-profile/update" className="btn btn-primary w-full">
                    Update Information
                </Link>
            </div>
        </div>
    );
};

export default MyProfilePage;