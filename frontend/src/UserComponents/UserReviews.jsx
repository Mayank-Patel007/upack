import React, { useState } from 'react';
import { LuThumbsUp, LuThumbsDown } from 'react-icons/lu';
import profile1 from '../assets/profile1.jpeg';
import profile2 from '../assets/profile2.jpeg';
import { AiOutlineClose } from 'react-icons/ai';

// ReviewForm Component
const ReviewForm = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [headline, setHeadline] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            rating,
            review,
            headline,
            name,
            email,
            image,
        });
        onClose(); // Close the popup after submission
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <AiOutlineClose size={24} />
                </button>
                <h2 className="text-xl font-bold mb-4">Share your thoughts</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Rate your experience *</label>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className={`h-6 w-6 cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    onClick={() => setRating(star)}
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Write a review *</label>
                        <textarea
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            rows="4"
                            placeholder="Tell us what you like or dislike"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Add a headline *</label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Summarize your experience"
                            value={headline}
                            onChange={(e) => setHeadline(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your name *</label>
                            <input
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your email address *</label>
                            <input
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Upload an image</label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

// UserReviews Component
const UserReviews = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('siteReviews'); // Add state to track active tab

    const reviews = [
        {
            name: 'Anirudh K.',
            date: '11/08/24',
            title: 'Consistent quality from Upack',
            review: 'Great quality',
            product: 'All Black Mailer Box - 10 x 10 x 2 Inch',
            avatar: profile2,
        },
        {
            name: 'Anirudh K.',
            date: '11/08/24',
            title: 'Consistent quality from Upack',
            review: 'Great quality',
            product: 'All Black Mailer Box - 10 x 10 x 2 Inch',
            avatar: profile2,
        },
        {
            name: 'Anirudh K.',
            date: '11/08/24',
            title: 'Consistent quality from Upack',
            review: 'Great quality',
            product: 'All Black Mailer Box - 10 x 10 x 2 Inch',
            avatar: profile2,
        },
        {
            name: 'Anirudh K.',
            date: '11/08/24',
            title: 'Consistent quality from Upack',
            review: 'Great quality',
            product: 'All Black Mailer Box - 10 x 10 x 2 Inch',
            avatar: profile2,
        },
        {
            name: 'Anirudh K.',
            date: '11/08/24',
            title: 'Consistent quality from Upack',
            review: 'Great quality',
            product: 'All Black Mailer Box - 10 x 10 x 2 Inch',
            avatar: profile2,
        },
        // other reviews...
    ];

    const productreviews = [
        {
            name: 'Mary Li.',
            date: '12/06/24',
            title: 'Delivered on Time',
            review: 'Very nice quality',
            product: 'All Black Mailer Box - 12 x 12 x 5 Inch',
            avatar: profile1,
        },
        {
            name: 'Mary Li.',
            date: '12/06/24',
            title: 'Delivered on Time',
            review: 'Very nice quality',
            product: 'All Black Mailer Box - 12 x 12 x 5 Inch',
            avatar: profile1,
        },
        {
            name: 'Mary Li.',
            date: '12/06/24',
            title: 'Delivered on Time',
            review: 'Very nice quality',
            product: 'All Black Mailer Box - 12 x 12 x 5 Inch',
            avatar: profile1,
        },
        {
            name: 'Mary Li.',
            date: '12/06/24',
            title: 'Delivered on Time',
            review: 'Very nice quality',
            product: 'All Black Mailer Box - 12 x 12 x 5 Inch',
            avatar: profile1,
        },
        {
            name: 'Mary Li.',
            date: '12/06/24',
            title: 'Delivered on Time',
            review: 'Very nice quality',
            product: 'All Black Mailer Box - 12 x 12 x 5 Inch',
            avatar: profile1,
        },
        // other product reviews...
    ];

    return (
        <div className="md:px-10 space-y-5 my-10 p-4">
            <h1 className="text-3xl font-bold mb-4">REVIEWS</h1>

            {activeTab === 'siteReviews' && (
                <div className='flex justify-center items-center pt-40 pb-10'>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className='bg-blue-500 hover:bg-blue-400 font-semibold rounded-full text-white py-1 px-4'
                    >
                        Write a Review
                    </button>
                </div>
            )}

            <div className="space-x-4">
                <button
                    className={`text-gray-500 px-2 py-1 ${activeTab === 'siteReviews' ? 'border-b-2 border-black' : ''}`}
                    onClick={() => setActiveTab('siteReviews')}
                >
                    Site Reviews
                </button>
                <button
                    className={`text-gray-500  px-2 py-1 ${activeTab === 'productReviews' ? 'border-b-2 border-black pt-64' : ''}`}
                    onClick={() => setActiveTab('productReviews')}
                >
                    Product Reviews
                </button>
            </div>

            {/* Conditional rendering based on activeTab */}
            <div className="mt-4">
                {activeTab === 'siteReviews' && (
                    <div>
                        {reviews.map((review, index) => (
                            <div key={index} className="flex-col md:flex-row mb-5 p-5 shadow-xl border border-b border-gray-300">
                                <div className="flex justify-between space-x-4">
                                    <div className='flex items-start space-x-4'>
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold">{review.name}</p>
                                            <p className="text-sm text-blue-500">Verified Buyer</p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-gray-500">
                                        {review.date}
                                    </div>
                                </div>

                                <div className="pt-4 xl:ml-16 flex-1">
                                    <div className="items-center mt-2 md:mt-0">
                                        <div className="flex space-x-1 text-yellow-400">
                                            {Array(5).fill().map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                        <h3 className="font-semibold text-xl pb-10">{review.title}</h3>
                                    </div>
                                    <p className="text-sm mt-1">{review.review}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Product Reviewed: <span className="font-semibold">{review.product}</span>
                                    </p>
                                </div>
                                <div className="flex text-end justify-end text-sm text-gray-500 mt-2">
                                    <p className='flex items-center space-x-1 gap-2'>Was This Review Helpful
                                        <span className='hover:text-blue-600 hover:scale-150 '><LuThumbsUp /></span>0
                                        <span className='hover:text-blue-600 hover:scale-150 '><LuThumbsDown /></span>0
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'productReviews' && (
                    <div>
                        {productreviews.map((review, index) => (
                            <div key={index} className="flex-col md:flex-row mb-5 p-5 shadow-xl border border-b border-gray-300">
                                <div className="flex justify-between space-x-4">
                                    <div className='flex items-start space-x-4'>
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold">{review.name}</p>
                                            <p className="text-sm text-blue-500">Verified Buyer</p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-gray-500">
                                        {review.date}
                                    </div>
                                </div>

                                <div className="pt-4 xl:ml-16 flex-1">
                                    <div className="items-center mt-2 md:mt-0">
                                        <div className="flex space-x-1 text-yellow-400">
                                            {Array(5).fill().map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                        <h3 className="font-semibold text-xl pb-10">{review.title}</h3>
                                    </div>
                                    <p className="text-sm mt-1">{review.review}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Product Reviewed: <span className="font-semibold">{review.product}</span>
                                    </p>
                                </div>
                                <div className="flex text-end justify-end text-sm text-gray-500 mt-2">
                                    <p className='flex items-center space-x-1 gap-2'>Was This Review Helpful
                                        <span className='hover:text-blue-600 hover:scale-150 '><LuThumbsUp /></span>0
                                        <span className='hover:text-blue-600 hover:scale-150 '><LuThumbsDown /></span>0
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {isFormOpen && <ReviewForm onClose={() => setIsFormOpen(false)} />}
        </div>
    );
};

export default UserReviews;
