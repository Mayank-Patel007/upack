import React,{useEffect} from 'react';
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';

const MyAccount = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=" ">
            <div className="flex flex-col gap-2 lg:flex-row lg:px-16 h-screen lg:items-start lg:pt-20 border-t-8 xl:m-20 xl:rounded-xl border-orange-500 border xl:my-10">
                {/* Login Section */}
                <div className=" p-5 lg:w-1/2 ">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4 font-montserrat">Login</h2>
                    <form className='lg:space-y-5 font-nunito'>
                        <div className="mb-4">
                            <label className="block text-gray-700"></label>
                            <div className="flex items-center border rounded-lg">
                                <input type="text" placeholder="Your Name*" className="lg:text-lg w-full px-4 py-2 lg:py-4 outline-none" />
                                <FaUser className="text-gray-500 mx-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700"></label>
                            <div className="flex items-center border rounded-lg">
                                <input type="email" placeholder="Email Address*" className="lg:text-lg w-full px-4 py-2 lg:py-4 outline-none" />
                                <FaEnvelope className="text-gray-500 mx-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700"></label>
                            <div className="flex items-center border rounded-lg">
                                <input type="password" placeholder="Enter Password" className="lg:text-lg w-full px-4 py-2 lg:py-4 outline-none" />
                                <FaLock className="text-gray-500 mx-2" />
                            </div>
                        </div>
                        <button className="px-16 bg-blue-700 text-white py-3 lg:py-4 rounded-lg hover:bg-orange-500 transition duration-200 lg:text-lg">Login</button>
                        <div className="flex items-center mt-4">
                            <input type="checkbox" className="mr-2" />
                            <span className=''>Remember Me</span>
                        </div>
                        <div className="flex items-center mt-4 space-x-4">
                            <span className="text-gray-600 font-montserrat">Or login with</span>
                            <FaFacebookF size={44} className="text-gray-500 cursor-pointer bg-gray-100 hover:bg-lime-500 hover:text-white g p-3 rounded" />
                            <FaTwitter size={44} className="text-gray-500 mx-2 cursor-pointer bg-gray-100 hover:bg-lime-500 hover:text-white p-3 rounded" />
                            <FaGoogle  size={44} className="text-gray-500 mx-2 cursor-pointer bg-gray-100 hover:bg-lime-500 hover:text-white p-3 rounded" />
                        </div>
                    </form>
                </div>

                {/* Register Section */}
                <div className=" p-5 lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4 font-montserrat">Register</h2>
                    <form className='lg:space-y-5 font-nunito'>
                        <div className="mb-4">
                            <label className="block text-gray-700"></label>
                            <div className="flex items-center border rounded-lg">
                                <input type="text" placeholder="Your Name*" className="lg:text-lg w-full px-4 py-2 lg:py-4 outline-none" />
                                <FaUser className="text-gray-500 mx-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700"></label>
                            <div className="flex items-center border rounded-lg">
                                <input type="email" placeholder="Email Address*" className="lg:text-lg w-full px-4 py-2 lg:py-4 outline-none" />
                                <FaEnvelope className="text-gray-500 mx-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700"></label>
                            <div className="flex items-center border rounded-lg">
                                <input type="password" placeholder="Enter Password" className="lg:text-lg w-full px-4 py-2 lg:py-4 outline-none" />
                                <FaLock className="text-gray-500 mx-2" />
                            </div>
                        </div>
                        <button className="lg:text-lg px-16 bg-blue-700 text-white py-3 lg:py-4 rounded-lg hover:bg-orange-500 transition duration-200 font-montserrat ">Register</button>
                        <p className="mt-4  text-gray-500">*You must be a free registered user.</p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
