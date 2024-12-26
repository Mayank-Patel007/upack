import React,{useEffect} from 'react';

const UserContactForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex justify-center items-start py-10 bg-gray-50">
            <div className="bg-white p-8 rounded-lg w-full px-10 mx-10 flex flex-col lg:flex-row">
                {/* Left side - Form */}
                <div className="w-full lg:w-2/3 lg:pr-4">
                    <h2 className="text-2xl font-light text-gray-700 mb-6">
                        Write <span className="font-semibold">Us</span>
                    </h2>
                    <form className="space-y-4">
                        <div className='flex flex-col lg:flex-row lg:gap-2'>
                            <div className='w-full lg:w-1/2'>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    What’s on your mind? <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
                {/* Right side - Contact Details */}
                <div className="w-full lg:w-1/3 lg:pl-4 mt-8 lg:mt-0">
                    <h2 className="text-2xl font-light text-gray-700 mb-6">
                        Contact <span className="font-semibold">Details</span>
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-400 text-white p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 7.89a1 1 0 001.41 0L21 7m-8 4h7m-7 4h7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p>Customer Service (Mon-Sat, 9am - 6pm)</p>
                                <p>(022) 4896 4040</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-400 text-white p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 8a6 6 0 00-12 0v5a6 6 0 0012 0V8z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h8m-8 4h8"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p>
                                    <strong>Customer Service:</strong> helpdesk@upack.in
                                </p>
                                <p>
                                    <strong>Custom Orders:</strong> sales@upack.in
                                </p>
                                <p>
                                    <strong>General Info:</strong> info@upack.in
                                </p>
                                <p>
                                    <strong>Careers:</strong> hr@upack.in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserContactForm;
