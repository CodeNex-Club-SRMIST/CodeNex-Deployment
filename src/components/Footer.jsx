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
                                            href="" 
                                            className="text-lg hover:text-cyan-400 transition duration-200 hover:underline"
                                        >
                                            SRMIST KTR
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="" 
                                            className="text-lg hover:text-cyan-400 transition duration-200 hover:underline"
                                        >
                                            codenex.club@srmist.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-6">
                        <a 
                            href="https://www.instagram.com/codenex_srmist"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a 
                            href="https://x.com/CodeNexClub?t=YuNrpDf1yt_E6nFkK7jyUA&s=09"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/code-nex-club-srmist/posts/?feedView=all"
                            className="mx-4 text-white hover:text-cyan-400 transition duration-200 transform hover:scale-110"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                        <a 
                            href="https://whatsapp.com/channel/0029VamkMtaEgGfG4qkPDZ3V"
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
            </footer>
        </>
    );
};

export default Footer;
