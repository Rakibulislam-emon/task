"use client";
import { useState } from "react"; // Ensure this import is present
import Image from 'next/image';
import img1 from '../../assets/slider/download (1).jpeg';
import img2 from '../../assets/slider/download (2).jpeg';
import img3 from '../../assets/slider/download (3).jpeg';
import img4 from '../../assets/slider/download (4).jpeg';
import img5 from '../../assets/slider/download (5).jpeg';

export const Carousole = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
    ];

    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
        );

    const nextSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
        );

    return (
        <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
            <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                {/* Arrow Left */}
                <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                    {/* SVG code for left arrow */}
                </button>
                {/* Arrow Right */}
                <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                    {/* SVG code for right arrow */}
                </button>
            </div>
            {/* Slider Container */}
            <div className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
                style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
                {/* Sliders */}
                {sliderImages.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]" : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
                        style={{ perspective: "200px" }}>
                        <Image
                            src={slide.img}
                            layout="fill"
                            className="w-full h-full bg-gray-900 rounded-lg duration-300"
                            alt={`Slide ${inx}`}
                            style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
