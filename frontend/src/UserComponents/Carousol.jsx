import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function UserCarousol() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const tl = useRef(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3006/api/banner/getHomeActiveBanners`, { withCredentials: true });
            const bannersWithIds = response.data.data.map((banner, index) => ({
                ...banner,
            }));
            setBanners(bannersWithIds);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Mobile slideshow
        const mobileTl = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power2.inOut" } });

        banners.forEach((slide, i) => {
            mobileTl
                .to(`#mobile-slide-${i}`, { opacity: 1, display: 'block' }) // Fade in the current card
                .to(`#mobile-slide-${i}`, { opacity: 1, delay: 2 }) // Hold the card for 2 seconds
                .to(`#mobile-slide-${i}`, { opacity: 0, display: 'none' }); // Fade out and hide the current card
        });

        // Desktop slideshow
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [banners]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    return (
        <div className='bg-[#fee6da]'>
            {/* Mobile View */}
            <div className='block md:hidden bg-[#fee6da]'>
                {banners.map((slide, index) => (
                    <div
                        key={index}
                        id={`mobile-slide-${index}`}
                        className={`w-full opacity-0 bg-[#fee6da]`}
                        style={{ display: 'none' }} // Initially hide all slides
                    >
                        <div className='flex justify-center bg-[#fee6da]'>
                            {slide.photo && slide.photo[1] && (
                                <img className='w-full max-w-xs' src={`http://localhost:3006/api/image/download/${slide.photo[1]}`} alt={`slide${index + 1}`} />
                            )}
                        </div>
                        <div className='flex-col items-center text-center py-5 space-y-2 font-montserrat'>
                            <p className='text-4xl font-bold px-12 text-gray-800 font-montserrat'>
                                {slide.title}
                            </p>
                            <p className='text-orange-500 font-semibold text-2xl'>
                                {slide.details}
                            </p>
                            <p  className='text-gray-800 font-semibold text-2xl'>
                                {slide.details2}
                            </p>
                            {/* <ReactQuill
                                readOnly={true}
                                value={slide.details}
                                modules={{ toolbar: false }}
                                theme="bubble"
                                className="quill"
                            /> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View */}
            <div className='hidden md:block bg-[#fee6da] md:py-16 lg:py-0 relative group'>
                {banners.map((slide, index) => (
                    <div
                        key={index}
                        className='relative h-2/3'
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        {slide.photo && slide.photo[0] && (
                            <img className='' src={`http://localhost:3006/api/image/download/${slide.photo[0]}`} alt={`desktopSlide${index + 1}`} />
                        )}
                        <div className='absolute top-20 md:top-5 lg:top-10 xl:top-24 md:w-2/4 xl:pl-28 md:text-start lg:text-center lg:w-1/4 text-center px-10 md:px-5 space-y-3'>
                            <p className='text-4xl lg:text-5xl xl:text-6xl lg:w-auto  font-bold md:w-1/2 text-gray-800 font-montserrat'>
                                {slide.title}
                            </p>
                            <p className='text-orange-500 font-semibold text-2xl xl:text-3xl'>
                                {slide.details}
                            </p>
                            <p className='text-gray-800 font-semibold text-2xl xl:text-2xl'>
                                {slide.details2}
                            </p>
                            {/* <ReactQuill
                                readOnly={true}
                                value={slide.details}
                                modules={{ toolbar: false }}
                                theme="bubble"
                                className="quill"
                            /> */}
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    className='absolute top-1/2 transform -translate-y-1/2 left-5 text-orange-500 rounded-full p-2 hidden group-hover:block duration-500'
                    onClick={handlePrevClick}
                >
                    <FaAngleLeft size={32} />
                </button>
                <button
                    className='absolute top-1/2 transform -translate-y-1/2 right-5 text-orange-500 rounded-full p-2 hidden group-hover:block duration-500'
                    onClick={handleNextClick}
                >
                    <FaAngleRight size={32} />
                </button>
            </div>
        </div>
    );
}

export default UserCarousol;
