import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import footerimg from '../assets/pay.webp';
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import axios from 'axios';

const UserFooter = () => {
    const [footerData, setFooterData] = useState({
        phoneNo: '',
        email: '',
        instagramLink: '',
        facebookLink: '',
        twitterLink: '',
        workingHours: ''
    });
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        fetchFooter();
    }, []);

    const fetchFooter = async () => {
        try {
            const response = await axios.get('http://localhost:3006/api/footer/getFooter', { withCredentials: true });
            console.log('Footer data:', response.data); // Log the response data
            setFooterData(response.data);
        } catch (error) {
            console.error('Error fetching footer data:', error); // Log errors
        } finally {
            setLoading(false); // Set loading to false after data fetch
        }
    };

    if (loading) return <div>Loading...</div>; // Show loading state

    return (
        <div>
            <footer className="bg-[#fee6da] py-10 ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div>
                            <h2 className="font-bold mb-4 text-sm font-montserrat ">CONTACT INFO</h2>
                            <div className='md:flex'>
                                <div className='md:w-1/2 lg:space-y-10'>
                                    <div className="flex items-center mb-4">
                                        <div className='flex flex-col'>
                                            <span className='flex items-center gap-1'><FaPhoneAlt />PHONE:</span>
                                            <span>{footerData.phoneNo}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className='flex flex-col'>
                                            <span className='flex items-center gap-1'><MdOutlineMail />EMAIL:</span>
                                            <span>{footerData.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <div className="flex text-start mb-4">
                                        <div className='flex flex-col'>
                                            <span className='flex items-center gap-1'><FaRegClock />WORKING DAYS/HOURS:</span>
                                            <span>{footerData.workingHours}</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 md:pt-5 lg:pt-1 md:pl-4">
                                        <a href={footerData.facebookLink} className="text-2xl hover:text-blue-700 " target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                                        <a href={footerData.instagramLink} className="text-2xl hover:text-pink-500 " target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                        <a href={footerData.twitterLink} className="text-2xl hover:text-sky-500 " target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h2 className="font-bold mb-4 text-sm font-montserrat ">CUSTOMER SERVICE</h2>
                            <ul className='xl:flex'>
                                <span className='xl:w-1/2 lg:space-y-1 flex flex-col'>
                                    <Link to="/userfaqpage" className="mb-2 hover:text-orange-500">FAQ</Link>
                                    <Link to="/myaccountpage" className="mb-2 hover:text-orange-500">My Account</Link>
                                    <Link to='/userreturnpage' className="mb-2 hover:text-orange-500">Cancellations & Returns</Link>
                                    <Link to="/userpackpointspage" className="mb-2 hover:text-orange-500">PackPoints</Link>
                                </span>
                                <span className='xl:w-1/2 lg:space-y-1 flex flex-col'>
                                    <Link to='/usershippingpage' className="mb-2 hover:text-orange-500">Shipping Policy</Link>
                                    <Link to="/userpaymentoptionspage" className="mb-2 hover:text-orange-500">Payment Options</Link>
                                    <Link to="/usercontactuspage" className="mb-2 hover:text-orange-500">Contact Us</Link>
                                    <Link to="/usersamplepage" className="mb-2 hover:text-orange-500">Samples</Link>
                                </span>
                            </ul>
                        </div>

                        {/* Company Information */}
                        <div>
                            <h2 className="font-bold mb-4 text-sm font-montserrat ">COMPANY INFORMATION</h2>
                            <ul className='xl:flex'>
                                <span className='xl:w-1/2 flex flex-col space-y-1'>
                                    <Link to="/aboutupackpage" className="mb-2 hover:text-orange-500">About Us</Link>
                                    <Link to="/usertermsandcondidtionspage" className="mb-2 hover:text-orange-500">Terms & Conditions</Link>
                                    <Link to="/userprivatepolicypage" className="mb-2 hover:text-orange-500">Privacy Policy</Link>
                                </span>
                                <span className='xl:w-1/2 flex flex-col space-y-1'>
                                    <Link to='/userblogpage' className="mb-2 hover:text-orange-500">Blog</Link>
                                    <Link to="/usersitemappage" className="mb-2 hover:text-orange-500">Sitemap</Link>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-white mt-4">
                <div className="container mx-auto px-4 flex flex-col items-center justify-between py-4 border-gray-300 gap-5 md:flex-row-reverse md:px-10">
                    <div className="flex items-center h-10 max-w-96">
                        <img src={footerimg} alt="Payment Methods" />
                    </div>
                    <p className="text-sm text-gray-600">© 2024 U-Pack®. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default UserFooter;
