"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-12 border-t border-base-300">
            
            <div className="footer container mx-auto p-10 flex flex-col md:flex-row justify-between items-start md:items-center">
                
               
                <aside className="flex flex-col gap-2">
                    <Link href="/" className="text-2xl font-bold text-primary">SkillSphere</Link>
                    <p className="opacity-70 max-w-50">
                        Empowering your future with world-class skills.
                    </p>
                </aside>

              
                <nav>
                    <h6 className="footer-title opacity-100 font-bold text-primary">Contact Info</h6>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-primary" />
                        <a href="mailto:info@skillsphere.com" className="link link-hover">info@skillsphere.com</a>
                    </div>
                </nav>

               
                <nav>
                    <h6 className="footer-title opacity-100 font-bold text-primary">Legal</h6>
                    <Link href="/terms" className="link link-hover">Terms & Conditions</Link>
                    <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
                    <Link href="/cookie-policy" className="link link-hover">Cookie Policy</Link>
                </nav>

               
                <nav>
                    <h6 className="footer-title opacity-100 font-bold text-primary">Social Links</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a href="#" className="hover:text-primary transition-colors"><FaFacebook /></a>
                        <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
                    </div>
                </nav>
            </div>

            
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by SkillSphere</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;