import React, { useState, useEffect } from 'react';
import sampleimg from '../assets/sampleimg.jpg'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Slider from "react-slick";

const UserSample = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [showMoreInfo, setShowMoreInfo] = useState(false);
    return (
        <div className="max-w-5xl mx-auto p-8 my-10 bg-stone-50  rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={sampleimg} // Replace with the actual image URL
                        alt="Sample"
                        className="h-80 w-80 lg:h-96 lg:w-96 rounded-lg border"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">Sample</h1>

                    <ul className="list-disc list-inside space-y-2 px-7">
                        <li>Limit 1 sample per product, per customer; additional sizes/colors considered separate orders</li>
                        <li>Select any one of the 22000 plus products in our catalog</li>
                        <li>Choose your product type from the dropdown</li>
                        <li>Specify the box/product type, size, flute type, color, etc.</li>
                    </ul>

                    <p className="mt-4">
                        <strong>Sampling policy:</strong> Our samples are complimentary; however, a ₹299 fee applies solely to cover shipping & handling expenses.
                    </p>

                    <p className="mt-2">
                        Due to the high costs and resources needed for custom tooling and printing, we can't offer samples of custom-sized or printed boxes. We provide samples from our current stock to demonstrate our quality and workmanship, although sizes may differ.
                    </p>

                    <p className="mt-2 font-bold">
                        Due to high shipping costs, we're unable to provide large-size samples. We can offer smaller samples or detailed specs instead.
                    </p>

                    {/* Form Section */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Choose your product type <span className="text-red-500">*</span>
                        </label>
                        <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>-- Please Select --</option>
                            {/* Add options here */}
                        </select>

                        <label className="block text-sm font-medium text-gray-700 mt-4">
                            Notes <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="4"
                            placeholder="Please mention the product specifications such as the size, color, etc."
                        ></textarea>

                        <button className="mt-6  bg-blue-800 hover:bg-orange-500 text-white py-4 px-6 rounded-md font-semibold ">
                            ADD TO CART
                        </button>
                    </div>

                    <div>
                        <div className=' '>
                            <p className="text-gray-800 mb-2 text-lg font-semibold">Interested in larger quantities or custom size?</p>
                            <div className='space-y-2 md:flex md:space-y-0 md:gap-3'>
                                <p className='flex items-center gap-2'><MdOutlineMailOutline />Request a Quote</p>
                                <p className='flex items-center gap-2'><CiShoppingTag />Request a Sample</p>
                                <p className='flex items-center gap-2'><IoCallOutline />Call Us:(022) 4896 4040</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserSample;
