import rctg from '../assets/rctg.png';
import insta from '../assets/insta.png';
import twtr from '../assets/twtr.png';
import lkdn from '../assets/lkdn.png';
import wa from '../assets/wa.png';
import tbx from '../assets/tbx.png';

const Socials = () => {
    return (
        <>
            <div className='bg-black pb-60'>
                <div className='-mt-[50px]'>
                    

                    
                    <div className='flex flex-wrap items-center justify-center gap-10 px-4'>

                       
                        

                       

                        

                    </div>
                </div>

                <div>
                    <p className="text-white font-semibold text-center mt-72">Want to Collaborate?</p>

                   
                    <img
                        src={tbx}
                        alt=""
                        className="hidden md:w-[250px] lg:block absolute w-[250px] -mt-[145px] ml-[980px]"
                    />

                    <p className="text-white font-bold text-center text-8xl">Let's Talk!</p>

                    <div className="flex justify-center items-center">
                        <a href="mailto:connect.codenex@gmail.com" className="pt-7">
                            <button className="border-purple-500 border-2 p-4 w-[150px] rounded-full text-purple-500 hover:text-purple-300 hover:border-purple-300">
                                CONTACT US
                            </button>
                        </a>
                    </div>
                </div>






            </div>


        </>
    );
};

export default Socials;