import wrkshp from '../assets/wrkshp.jpg'
import prty from '../assets/prty.jpg'
import cdcmp from '../assets/cdcmp.jpg'
import hck from '../assets/hck.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <>
     <div className="bg-black  pt-28 w-full overflow-x-hidden" >
     <p className="bg-gradient-to-t from-purple-400  to-cyan-300 bg-clip-text text-transparent text-center text-4xl font-bold">
   EVENTS WE HELD
</p>


                {/* Slider container */}
                <div className="w-full sm:w-3/4 mx-auto ">
                    <div className="mt-20">
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div
                                key={index}
                                className="bg-cyan-100 border-2 border-zinc-700 rounded-2xl h-[290px] w-[280px] flex flex-col justify-center items-center hover:border-cyan-300">
                                <div className='flex flex-col items-center mt-4'>
                                    <p className='text-black text-center font-semibold text-xl'>{d.name}</p>
                                    <p className="text-black text-center">{d.text}</p>
                                </div>
                                <div className='flex justify-center items-center '>

                                <img src={d.img} alt="" className='h-[190px] w-[250px] mt-5 rounded-xl' />
                                </div>
                            </div>
                            
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
    
    
    </>
  )
}


const data = [
    {
        text: 'Coding Camp',
        name: 'Event 1',
      
        img: cdcmp
    },
    {
        text: 'Codenex Hackathon',
        name: 'Event 2',
        
        img: hck
    },
    {
        text: "House Party",
        name: 'Event 3',
        img: prty
    },
    {
        text: "Workshop",
        name: 'Event 4',
        img: wrkshp
    }
];
export default Carousel