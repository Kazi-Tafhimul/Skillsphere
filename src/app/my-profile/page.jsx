"use client";
import Link from 'next/link';

const MyProfilePage = () => {
    
    const user = {
        name: "User Name",
        email: "user@example.com",
        photoURL: "https://via.placeholder.com/150"
    };

    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <div className="card w-96 bg-base-200 shadow-xl p-8 items-center">
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
                        <img src={user.photoURL} alt="Profile" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="mb-6">{user.email}</p>
                
                
                <Link href="/my-profile/update" className="btn btn-primary w-full">
                    Update Information
                </Link>
            </div>
        </div>
    );
};

export default MyProfilePage;