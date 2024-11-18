import React from 'react';
import teammeet from '../assets/teammeet.jpg';
import teammeet2 from '../assets/teammeet2.jpg';
import orientation from '../assets/orientation.jpg';
import freshermeet from '../assets/freshermeet.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1, 
        centerMode: true,
        focusOnSelect: true,
        autoplay: true, 
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear", 
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
        arrows: false, // Remove arrows
    };

    return (
        <div className="bg-black pt-28 w-full overflow-hidden">
            <p className="bg-gradient-to-t from-purple-400 to-cyan-300 bg-clip-text text-transparent text-center text-4xl font-bold">
                EVENTS WE HELD
            </p>
            <div className="w-full sm:w-3/4 mx-auto mt-20">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div
                            key={index}
                            className="bg-cyan-100 border-2 border-zinc-700 rounded-2xl h-[320px] w-[290px] flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:border-cyan-300 duration-300 ease-in-out"
                        >
                            <div className="flex flex-col items-center mt-4">
                                <p className="text-black text-center font-semibold text-xl">{d.name}</p>
                                <p className="text-black text-center text-sm">{d.text}</p>
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <img src={d.img} alt={d.name} className="h-[220px] w-[280px] rounded-xl object-cover" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const data = [
    {
        text: 'CodeNex Team meet',
        name: 'Event 1',
        img: teammeet
    },
    {
        text: 'Teammeet',
        name: 'Event 2',
        img: teammeet2
    },
    {
        text: "Orientation",
        name: 'Event 3',
        img: orientation
    },
    {
        text: "Freshermeet",
        name: 'Event 4',
        img: freshermeet
    }
];

export default Carousel;
