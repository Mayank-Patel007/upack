import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStarHalfStroke, FaChevronRight, FaChevronDown } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const testimonialsData = [
    {
        name: "Shloka S.",
        verified: true,
        date: "07/10/24",
        rating: 5,
        title: "Thank you for being prompt.",
        review: "Thank you for being prompt. When I called to enquire, you guys were very helpful. I received the items and am very happy with the quality.",
        product: "Kraft Mailing Tubes with Caps - 18 x 2.5 Inch"
    },
    {
        name: "John D.",
        verified: true,
        date: "05/14/24",
        rating: 4,
        title: "Good Quality Product",
        review: "The product quality is good. Delivery was on time, and the customer service was supportive.",
        product: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch"
    },
    {
        name: "Priya K.",
        verified: true,
        date: "03/22/24",
        rating: 5,
        title: "Highly Recommend!",
        review: "Excellent service and product. The team was very helpful, and the product met my expectations perfectly.",
        product: "Stretch Film Roll - 500mm x 300m"
    }
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-6 rounded-lg  ">
            <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">
                    {testimonial.name}
                    {testimonial.verified && <span className="text-blue-500 ml-2">Verified Buyer</span>}
                </div>
                <div className="text-sm text-gray-500">{testimonial.date}</div>
            </div>
            <div className="flex items-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                ))}
            </div>
            <h3 className="mt-4 mb-10 text-xl font-semibold ">{testimonial.title}</h3>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
            <p className="text-gray-500 mt-20">{testimonial.product}</p>
        </div>
    );
};

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className=" ">
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </Slider>
        </div>
    );
};



const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className='border-t border-gray-200 '>
            <button onClick={onClick} className=' w-full bg-[#fee6da] rounded-lg  flex justify-between items-center p-3 text-left focus:outline-none '>
                <span className='font-montserrat'>{faq.question}</span>
                <span>{isOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
            </button>
            {isOpen && (
                <div className='p-4 bg-[#fdf0e9]'>
                    <ReactQuill
                        readOnly={true}
                        value={faq.answer}
                        modules={{ toolbar: false }}
                        theme="bubble"
                        className="quill"
                    />
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const [faqs, setFaqs] = useState([]);
    const [loadings, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3006/api/faq/getActiveFAQs`, { withCredentials: true });
            const faqsWithIds = response.data.data.map((faqItem, index) => ({
                ...faqItem,
            }));
            setFaqs(faqsWithIds);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='max-w-2xl mx-auto py-16  xl:px-24'>
            <h2 className='text-3xl text-blue-900 font-bold text-center mb-8'>Frequently Asked Questions</h2>
            <div className='rounded-lg space-y-2'>
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </div>
    );
};

// Main Component
function ReviewsAndFAQ() {

    return (
        <div className='md:flex bg-slate-50'>
            {/* Reviews Section */}
            <div className='px-10 xl:px-32 md:w-1/2 '>
                <div className='flex-col items-center text-center justify-center space-y-8 py-16  '>
                    <p className='text-blue-900 text-4xl xl:text-5xl font-bold'>High Quality Packing Materials</p>
                    <p className='text-lg font-medium bg-gray-100 p-2 rounded-full md:px-20'>CHECK OUT OUR BLOG</p>
                </div>
                <div>
                    <div className='space-y-4'>
                        <p className='text-blue-500 text-3xl'>Real reviews from real customers</p>
                        <div className='flex items-center lg:justify-between space-x-3'>
                            <div className='flex items-center space-x-3'>
                                <div className='flex text-yellow-400 space-x-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                                <p>1065 reviews</p>
                            </div>
                            <div>
                                <p className='text-blue-500 cursor-pointer'>See all reviews</p>
                            </div>
                        </div>
                        {/* Testimonials Slider */}
                        <div>
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className='px-10 md:w-1/2 '>
                <FAQSection />
            </div>
        </div>
    );
}

export default ReviewsAndFAQ;
