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
                <img src={rctg} alt="" className='w-full h-[680px]' />
                <div className='-mt-[550px]'>
                    <div className='relative text-5xl bg-gradient-to-t from-purple-700 to-blue-400 bg-clip-text text-transparent font-bold text-center mb-16 px-4'
                        style={{ zIndex: 1 }}>
                        Check out our Socials
                    </div>

                    
                    <div className='flex flex-wrap items-center justify-center gap-10 px-4'>

                       
                        <div className='w-40 h-40 md:w-60 md:h-60 bg-white bg-opacity-30 border-2 rounded-2xl border-transparent hover:border-cyan-300'>
                            <div className='bg-white w-32 h-32 md:w-44 md:h-44 rounded-2xl mt-4 sm:mt-4 md:mt-8 lg:mt-8 mx-auto'>
                                <div className='flex items-center justify-center'>
                                    <img src={insta} alt="" className=' md:w-auto' />
                                </div>
                            </div>
                        </div>

                        <div className='w-40 h-40 md:w-60 md:h-60 bg-white bg-opacity-30 border-2 rounded-2xl border-transparent hover:border-cyan-300'>
                            <div className='bg-white w-32 h-32 md:w-44 md:h-44 rounded-2xl mt-4 sm:mt-4 md:mt-8 lg:mt-8 mx-auto'>
                                <div className='flex items-center justify-center'>
                                    <img src={twtr} alt="" className=' md:w-auto' />
                                </div>
                            </div>
                        </div>

                        <div className='w-40 h-40 md:w-60 md:h-60 bg-white bg-opacity-30 border-2 rounded-2xl border-transparent hover:border-cyan-300'>
                            <div className='bg-white w-32 h-32 md:w-44 md:h-44 rounded-2xl mt-4 sm:mt-4 md:mt-8 lg:mt-8 mx-auto'>
                                <div className='flex items-center justify-center'>
                                    <img src={lkdn} alt="" className=' md:w-auto' />
                                </div>
                            </div>
                        </div>

                        <div className='w-40 h-40 md:w-60 md:h-60 bg-white bg-opacity-30 border-2 rounded-2xl border-transparent hover:border-cyan-300'>
                            <div className='bg-white  w-32 h-32 md:w-44 md:h-44 rounded-2xl mt-4 sm:mt-4 md:mt-8 lg:mt-8  mx-auto'>
                                <div className='flex items-center justify-center'>
                                    <img src={wa} alt="" className=' md:w-auto' />
                                </div>
                            </div>
                        </div>

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
                        <a href="" className="pt-7">
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