import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io5";
import ftr from '../assets/ftr.png';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="bg-black text-white py-10 shadow-xl">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-10">
                        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                            <img src={ftr} alt="CodeNex Logo" className="w-[470px] h-auto" />
                        </div>

                        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 text-center md:text-left">
                            <div className="text-gray-400 space-y-3">
                                <ul>
                                    <li>
                                        <a 
                                            href="https://takeuforward.org/about-us" 
                                            className="text-lg hover:text-cyan-400 transition duration-200 hover:underline"
                                        >
                                            SRMIST KTR
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://takeuforward.org/contact-us" 
                                            className="text-lg hover:text-cyan-400 transition duration-200 hover:underline"
                                        >
                                            codenex.club@srmist.com
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://takeuforward.org/plus" 
                                            className="text-lg hover:text-cyan-400 transition duration-200 hover:underline"
                                        >
                                            +91-0000000000
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-6">
                        <a 
                            href="https://instagram.com"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a 
                            href="https://twitter.com"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a 
                            href="https://linkedin.com"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                        <a 
                            href="https://wa.me"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <IoLogoWhatsapp size={24} />
                        </a>
                    </div>

                    <div className="border-t border-gray-700 pt-6 text-center">
                        <p className="text-gray-400 text-sm">
                            Made with ❤️ by CodeNex Tech Team
                        </p>
                    </div>
                </div>

                <div className="flex 
    half-screen-padding         
    lg:px-[70px]           
    mb-6">
    <a href="#" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <FaInstagram />
    </a>
    <a href="#" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <FaTwitter />
    </a>
    <a href="#" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <FaLinkedinIn />
    </a>
    <a href="#" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <IoLogoWhatsapp />
    </a>
</div>
        </footer>
        </>
    );
};

export default Footer;
