import React, { useState, useEffect } from 'react';
import RazorPayImg from '../assets/upack_razorpay_bar.webp'
import productimg from "../assets/mailer_boxes.webp"
const UserCheckout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Daman & Diu", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const countries = [
        "India", "United States", "Canada", "United Kingdom", "Australia", "Germany",
        "France", "Italy", "Spain", "Brazil", "China", "Japan", "South Korea", "Mexico"
    ];

    const [selectedCountry, setSelectedCountry] = useState("India");

    return (
        <div className='lg:flex '>
            <div className=" bg-stone-50 lg:w-1/3 px-7 py-10">
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700"><span className='rounded-full py-1 px-4 border-2 shadow-lg  text-orange-400'>1</span> Shipping Address</h2>
                    <div className="mt-4">
                        <label className="block text-gray-700">Email Address*</label>
                        <input type="email" className="w-full p-2 mt-1 border border-gray-300 rounded" />

                        <div className="border-2 border-gray-300 p-4 mt-4 rounded">
                            <h3 className="text-md font-medium text-gray-700 bg-gray-200">Register / Choose a password</h3>
                            <label className="block text-gray-700 mt-3">Password*</label>
                            <input type="password" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                            <label className="block text-gray-700 mt-3">Confirm Password*</label>
                            <input type="password" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                        </div>

                        <div className="mt-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Subscribe for email updates
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">First Name*</label>
                                <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name*</label>
                                <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">Company</label>
                                <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-700">GST Number</label>
                                <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Mobile Number*</label>
                            <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                        </div>

                        {/* New fields added here */}
                        <div className="mt-4">
                            <label className="block text-gray-700">Street Address*</label>
                            <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700">City*</label>
                                <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                            </div>
                        </div>

                        <div className="mt-4">
                            {/* Other form fields go here */}

                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div>
                                    <label className="block text-gray-700">Pincode*</label>
                                    <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded" />
                                </div>

                                <div>
                                    <label className="block text-gray-700">State*</label>
                                    <select className="w-full p-2 mt-1 border border-gray-300 rounded">
                                        <option value="">Select State</option>
                                        {indianStates.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700">Country*</label>
                                    <select
                                        className="w-full p-2 mt-1 border border-gray-300 rounded"
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* Other form fields go here */}
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-stone-50 lg:w-1/3 px-7 py-10">
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700"><span className='rounded-full py-1 px-4 border-2 shadow-lg  text-orange-400'>2</span> Shipping Methods</h2>
                    <div className='flex justify-around py-4'>
                        <p>₹0.00</p>
                        <p>Free Shipping</p>
                        <p>select Shipping</p>
                    </div>
                </div>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700"><span className='rounded-full py-1 px-4 border-2 shadow-lg  text-orange-400'>3</span> Payment Methods</h2>
                    <div className='flex justify-around py-4 h-20 '>
                        <img src={RazorPayImg} alt="img" />
                    </div>
                </div>
            </div>

            <div className="bg-stone-50 lg:w-1/3 px-7 py-10  rounded-lg">
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700 flex items-center">
                        <span className="rounded-full py-1 px-4 border-2 shadow-lg text-orange-400 mr-2">✓</span>
                        Order Summary
                    </h2>
                </div>

                <div className="flex items-center py-4">
                    <img
                        src={productimg} // Replace with the actual image URL
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                        <p className="text-gray-700 font-medium">
                            Blue Colour Mailer Box - Blue Outside & Inside - 7 x 5.75 x 2 Inch
                        </p>
                        <p className="text-gray-700 mt-2">₹3,881.00</p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between text-gray-700">
                        <span>Cart Subtotal</span>
                        <span>₹3,881.00</span>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-2">
                        <span>Excl. of IGST</span>
                        <span>₹465.72</span>
                    </div>
                    <div className="flex justify-between text-gray-700 mt-2">
                        <span>Shipping</span>
                        <span>₹0.00</span>
                    </div>
                    <div className="flex justify-between text-gray-500 mt-2">
                        <span>Select Shipping - Free Shipping</span>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4 text-xl font-semibold text-gray-700">
                    <div className="flex justify-between">
                        <span>Order Total</span>
                        <span>₹4,346.72</span>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg">
                        PLACE ORDER
                    </button>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default UserCheckout;
