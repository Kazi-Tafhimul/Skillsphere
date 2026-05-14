"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const router = useRouter();
    const handleLogin = (e) =>{
        e.preventDefault();
        toast.success("Welcome back to SkillSphere!");
        router.push("/");
    };
    const handleGoogleLogin = () =>{

    }
    return (
        <div className='min-h-[80vh] flex items-center justify-center p-4'>
            <form onSubmit={handleLogin} className='fieldset w-full max-w-sm bg-base-200 border-base-200 rounded-box  border p-8 shadow-lg'>
                <h1 className='text-2xl font-bold text-center mb-4 text-primary'>
                    Login to SkillSphere
                </h1>
                <label className="fieldset-legend">Email</label>
                <input type="email" className="input w-full" placeholder="Email" required />

                <label className="fieldset-legend mt-4">Password</label>
                <input type="password" className="input w-full" placeholder="Password" required />

                <button className="btn btn-primary mt-6">Login</button>

                <div className="divider">OR</div>
                <button 
                    type="button" 
                    onClick={handleGoogleLogin} 
                    className="btn btn-outline flex items-center gap-2"
                >
                    <FcGoogle className="text-xl" />
                    Login with Google
                </button>
                <p className="text-center mt-4 text-sm">
                    Do not have an account?{" "}
                    <Link href="/register" className="link link-primary font-semibold">
                        Register here
                    </Link>
                </p>

            </form>
        </div>
       
    );
};

export default LoginPage;