"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathName = usePathname();
    const isLoggedIn = true;
    const isActive = (path) => pathName === path || (path != "/" && pathName.startsWith(path));
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/"
        className={pathName === "/" ? "active text-primary font-bold text-blue-400 underline" : ""}>Home</Link></li>
        
          <li><Link href="/courses" className={pathName === "/courses" ? "active text-primary font-bold text-blue-400 underline" : ""}>Courses</Link></li>
         
        
        {isLoggedIn && <li><Link href="/my-profile " className={pathName === "/my-profile" ? "active text-primary font-bold text-blue-400 underline" : ""}>My Profile</Link></li>}
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">SkillSphere</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/" className={pathName === "/" ? "active text-primary font-bold text-blue-400 underline" : ""}>Home</Link></li>
      <li><Link href="/courses" className={pathName === "/courses" ? "active text-primary font-bold text-blue-400 underline" : ""}>Courses</Link></li>
      {isLoggedIn && <li><Link href="/my-profile" className={pathName === "/my-profile" ? "active text-primary font-bold text-blue-400 underline" : ""}>My Profile</Link></li>}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {isLoggedIn ? (
          <div className="dropdown dropdown-end">
           <div tabIndex={0} role="button" className="avatar cursor-pointer">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/my-profile/demo/spiderperson@192.webp" />
  </div>
</div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><button className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-success btn-sm text-white">Login</Link>
            <Link href="/register" className="btn btn-accent btn-sm text-white">Register</Link>
          </>
        )}
  </div>
</div>
            
            
            
            

            
        </div>
    );
};

export default Navbar;