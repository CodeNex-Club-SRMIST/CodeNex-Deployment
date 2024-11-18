import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io5";
import ftr from '../assets/ftr.png'

const Footer = () => {
    return (
        <>
        <hr />
        <footer className="bg-black text-white py-10">
            <div className=" mx-auto">
                {/* Use flex for main layout */}
                <div className="flex flex-col justify-center items-center gap-[10px] md:flex-row  md:justify-between mb-10">
                    <div className=" md:text-left mb-4 md:mb-0">
                        <img src={ftr} alt="" className='w-[470px] px-4'/>
                    </div>

                    {/* Combine all Quick Links into a single flex container */}
                    <div className="flex flex-col md:flex-row md:justify-around mt-4 pr-8 md:mt-0 ">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            
                            <ul className="text-gray-400 space-y-1 ">
                                <li>
                                    <a href="https://www.srmist.edu.in/" className="hover:text-cyan-400 transition duration-200 hover:underline">SRMIST KTR</a>
                                </li>
                                <li>
                                    <a href="mailto:connect.codenex@gmail.com" className="hover:text-cyan-400 transition duration-200 hover:underline">connect.codenex@gmail.com</a>
                                </li>                               
                            </ul>
                        </div>
                        {/* Repeat Quick Links for the other sections */}
                       
                        
                        
                    </div>
                </div>

                <div className="flex 
    half-screen-padding         
    lg:px-[70px]           
    mb-6">
    <a href="https://www.instagram.com/codenex_srmist" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <FaInstagram />
    </a>
    <a href="https://x.com/CodeNexClub?t=YuNrpDf1yt_E6nFkK7jyUA&s=09" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <FaTwitter />
    </a>
    <a href="https://www.linkedin.com/company/code-nex-club-srmist/posts/?feedView=all" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <FaLinkedinIn />
    </a>
    <a href="https://whatsapp.com/channel/0029VamkMtaEgGfG4qkPDZ3V" className="mx-3 text-white hover:text-cyan-400 transition duration-200">
        <IoLogoWhatsapp />
    </a>
</div>


                <div className="border-t border-gray-700  pt-6 text-center">
                    <p className="text-gray-400">
                         Made with ❤️ by CodeNex Team
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;