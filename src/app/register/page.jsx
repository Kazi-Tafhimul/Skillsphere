"use client";
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const RegistrationPage = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
    }
    const handleGoogleLogin = () =>{

    }
    return (
         <div className='min-h-[80vh] flex items-center justify-center p-4'>
            <form onSubmit={handleRegister} className='fieldset bg-base-200 border-base-200 w-full max-w-sm rounded-box  border p-8 shadow-lg'>
                <h1 className='text-2xl font-bold text-center mb-4 text-primary'>
                    Join SkillSphere
                </h1>
                <label className="fieldset-legend">Full Name</label>
                <input type="text" className="input w-full" placeholder="Your Name" required />
                <label className="fieldset-legend">Email</label>
                <input type="email" className="input w-full" placeholder="Email" required />
                <label className="fieldset-legend mt-4">Photo URL</label>
                <input type="url" className="input w-full" placeholder="https://example.com/photo.jpg" required />

                <label className="fieldset-legend mt-4">Password</label>
                <input type="password" className="input w-full" placeholder="Password" required />

                <button className="btn btn-primary mt-6">Register</button>

                <div className="divider">OR</div>
                <button 
                    type="button" 
                    onClick={handleGoogleLogin} 
                    className="btn btn-outline flex items-center gap-2"
                >
                    <FcGoogle className="text-xl" />
                    Register with Google
                </button>
                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="link link-primary font-semibold">
                        Login here
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default RegistrationPage;