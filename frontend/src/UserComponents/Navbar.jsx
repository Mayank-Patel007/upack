import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import { FaRegUser, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserNavbar() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [banners, setBanners] = useState([]);


    const fetchCategoriesAndBanners = async () => {
        setLoading(true);
        try {
            const categoriesResponse = await axios.get('http://localhost:3006/api/product/getall', { withCredentials: true });
            setCategories(categoriesResponse.data);

            const bannersResponse = await axios.get('http://localhost:3006/api/banner/getAll');
            setBanners(bannersResponse.data.data || []); // Store all banners
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategoriesAndBanners();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCategoryClick = (categoryId) => {
        setOpenCategory(prevId => prevId === categoryId ? null : categoryId);
    };

    const getBannersForCategory = (categoryId) => {
        return banners.filter(banner => banner.section === categoryId);
    };

    return (
        <nav className="bg-[#fee6da]  shadow-md top-0 z-50 sticky">
            <div className=" flex justify-between items-center p-1 xl:px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="h-12 lg:w-20 xl:h-20 ml-3 mt-2 xl:w-auto" />
                </Link>

                {/* Menu Items for Larger Screens */}
                <div className="hidden lg:flex items-center space-x-6 px-10">
                    <ul className="flex flex-row flex-wrap space-x-6 uppercase">

                        {categories.map(category => (
                            <li
                                key={category._id}
                                className="cursor-pointer font-semibold font-montserrat text-sm group"
                                onMouseEnter={() => setOpenCategory(category._id)}
                                onMouseLeave={() => setOpenCategory(null)}
                            >
                                <p className='flex items-center gap-1'> {category.category}<FaAngleDown className='group-hover:rotate-180' /></p>
                                {openCategory === category._id && (
                                    <div className="absolute border shadow-lg z-10 mr-2  bg-white">
                                        <div class="absolute top-[-7px] left-[20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>
                                        <div className="flex flex-col flex-wrap w-full justify-center px-3 items-center py-5">
                                            <div
                                                className={`${category.subCategories.length <= 10 ? 'grid grid-cols-2' : 'flex flex-wrap'
                                                    } justify-start w-full px-3 py-5 `}
                                            >
                                                {category.subCategories.map((sub) => (
                                                    <div key={sub._id} className="relative group">
                                                        <Link
                                                            to={`/category/${sub._id}`}
                                                            className={`bg-white w-[10.2rem] flex flex-col items-center justify-between  ${sub.navphoto ? 'border-r-2 border-b-2 py-2 my-2 px-3 flex h-44' : ' px-2 my-1 '} hover:underline transition-transform duration-200`}
                                                        >
                                                            {sub.navphoto && (
                                                                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md">
                                                                    <img
                                                                        src={`http://localhost:3006/api/logo/download/${sub.navphoto}`}
                                                                        alt={sub.navalt}
                                                                        className="max-w-full max-h-full object-contain"
                                                                    />
                                                                </div>
                                                            )}

                                                            <p
                                                                className={`${category.subCategories.length <= 10 ? ' ' : 'px-2 h-28'
                                                                    } text-center text-md font-semibold mt-2  h-10`}
                                                            >
                                                                {sub.category}
                                                            </p>
                                                        </Link>

                                                        {/* Show sub-subcategories if they exist */}
                                                        {sub.subSubCategory?.length > 0 && (
                                                            <div className=" ml-5 mt-4 text-gray-500 capitalize font-normal">
                                                                {sub.subSubCategory.map((subSub) => (
                                                                    <Link
                                                                        to={`/category/${subSub._id}`}
                                                                        key={subSub._id}
                                                                        className="block hover:underline text-sm my-2"
                                                                    >
                                                                        {subSub.category}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Display banners related to the hovered category */}
                                            {getBannersForCategory(category.category).length > 0 && getBannersForCategory(category.category).map(banner => (
                                                <div key={banner._id} className="relative flex flex-col items-center mt-4">
                                                    <img
                                                        src={`http://localhost:3006/api/image/download/${banner.photo[0]}`}
                                                        alt={banner.alt[0]}
                                                        className="max-w-[30rem] max-h-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                        <Link to='/userreviewspage' className="cursor-pointer hover:text-orange-500 font-semibold font-montserrat text-sm ">REVIEWS</Link>
                    </ul>
                </div>

                {/* Search Bar for Desktop */}
                <div className="hidden lg:flex flex-grow justify-center">
                    <div className="relative w-80">
                        <input
                            type="text"
                            placeholder="Search by size: e.g 10x8x4"
                            className="px-4 py-2 pr-10 rounded-full w-full shadow-sm focus:outline-none"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-500">
                            <IoIosSearch />
                        </button>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4 text-xl">
                    <button onClick={toggleMenu} className="lg:hidden">
                        <IoMdMenu />
                    </button>
                    <div className="flex items-center space-x-4">
                        <FaRegUser />
                        <Link to="/usercheckoutpage"> <PiHandbag className='hover:text-orange-500' /></Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white w-3/4 h-screen ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-2 mt-4 font-montserrat">
                    {categories.map(category => (
                        <li key={category._id} className="border-b p-3 py-5">
                            <div className="flex justify-between cursor-pointer font-semibold" onClick={() => handleCategoryClick(category._id)}>
                                <span>{category.category}</span>
                                {openCategory === category._id ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {openCategory === category._id && (
                                <ul className="pl-4 mt-2 space-y-3">
                                    {category.subCategories.map(sub => (
                                        <li key={sub._id} className="hover:text-orange-600 transition-colors border-b duration-300">
                                            <Link to={`/category/${sub._id}`}>{sub.category}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    {/* Display banners at the end of categories if banners are available */}
                    {/* {banners.length > 0 && banners.map(banner => (
                        <div key={banner._id} className="relative flex flex-col items-center mt-4">
                            <img
                                src={`http://localhost:3006/api/image/download/${banner.photo[0]}`}
                                alt={banner.alt[0]}
                                className="max-w-full max-h-full object-contain"
                            />
                            <p className="text-center text-md font-semibold mt-2">
                                {banner.title}
                            </p>
                        </div>
                    ))} */}
                    <Link to='/userreviewspage' className="border-b p-3 font-semibold font-montserrat">Reviews</Link>
                </ul>
            </div>
        </nav>
    );
}

export default UserNavbar;
