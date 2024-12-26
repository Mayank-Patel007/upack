import React,{useEffect} from 'react'
import aboutimg from '../assets/aboutus.webp'
import { FaRegRegistered } from "react-icons/fa6";
function AboutUpack() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='px-5 py-16 lg:px-16 xl:px-32 bg-stone-50'>
            <div className='h-20 w-20 '>
                <img src={aboutimg} alt="" />
            </div>

            <div>
                <p className='text-2xl py-4 flex gap-2'><span className='font-bold'>About </span> U-Pack<FaRegRegistered /></p>
            </div>

            <div className='space-y-4 py-5'>
                <p>U-Pack® is a Mumbai based customised made-to-order wholesale packaging material supplier engaged in design & distribution of a wide range of packing supplies tailored for business and industry-specific needs.</p>
                <p>We build the means to shape impressions and influence perceptions. It's your product in our package, designed to fit your needs. Your brand is everything, and we treat it as such. In a bid to help our customers order in confidence, we always stand behind our products and back every order with a 100% satisfaction guarantee. While we look forward to building continuing relations with our customers, we always strive to stand above the competition.</p>
                <p>Each of our employees understands our core values and is committed to delivering on the U-Pack® motto.</p>

                <div>
                    <p>Sincerely,</p>
                    <p>U-Pack Team</p>
                </div>

                <div>
                    <p>Email: <span className='hover:text-orange-500 cursor-pointer'>info@upack.in</span></p>
                </div>
            </div>
        </div>
    )
}

export default AboutUpack
