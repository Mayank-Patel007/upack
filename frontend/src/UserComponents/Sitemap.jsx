import React,{useEffect} from 'react'
import { FaCaretRight } from "react-icons/fa";

function Sitemap() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='px-5 pb-16 pt-5 lg:px-16 xl:px-32 space-y-5 bg-gray-100'>
            <p className='text-4xl font-bold'>SITEMAP</p>
            <div>
                <div>
                    <p className='text-3xl font-semibold'>Pages</p>
                </div>
                <ul className='py-5 md:flex md:space-x-4 '>
                    <div className='space-y-2 md:w-1/2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>Private Policy</li>
                        <li className='hover:text-orange-500 cursor-pointer'>About us | U-Pack</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Terms And Conditions</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Returns, Damages, and Restocking Fees</li>
                    </div>
                    <div className='space-y-2 md:w-1/2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>Shipping Policy</li>
                        <li className='hover:text-orange-500 cursor-pointer'>U-Pack Reviews</li>
                        <li className='hover:text-orange-500 cursor-pointer'>U-Pack Payments</li>
                    </div>
                    <div className='space-y-2 md:w-1/2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>Buy Packaging Material Online, Corrugated Boxes and Packing Supply</li>
                        <li className='hover:text-orange-500 cursor-pointer'>India's Premium Packing Material Store Online | Upack</li>
                    </div>
                </ul>
            </div>

            <div>
                <div>
                    <p className='text-3xl font-semibold'>Categories</p></div>
                <ul className='space-y-2 py-5'>
                    <li className='border-b-2 flex items-center gap-2 hover:text-orange-500 cursor-pointer'><FaCaretRight />Premium Boxes</li>
                    <li className='border-b-2 flex items-center gap-2 hover:text-orange-500 cursor-pointer'><FaCaretRight />Econo Boxes</li>
                    <li className='border-b-2 flex items-center gap-2 hover:text-orange-500 cursor-pointer'><FaCaretRight />Tapes</li>
                    <li className='border-b-2 flex items-center gap-2 hover:text-orange-500 cursor-pointer'><FaCaretRight />Bags</li>
                    <li className='border-b-2 flex items-center gap-2 hover:text-orange-500 cursor-pointer'><FaCaretRight />Rolls & Sheets</li>
                </ul>
            </div>

            <div>
                <div>
                    <p className='text-3xl font-semibold'>Products</p></div>
                <ul className=' md:space-x-4 py-5  md:flex md:py-0 '>
                    <div className='space-y-2 py-5 md:w-1/2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -9 x 6 x 3 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -4 x 4 x 4 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -6 x 6 x 4 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -10 x 8 x 6 Inch</li>
                    </div>
                    <div className='space-y-2 py-5 md:w-1/2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -9 x 6 x 3 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -4 x 4 x 4 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -12 x 9 x 4 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -6 x 6 x 4 Inch</li>
                    </div>
                    <div className='space-y-2 py-5 md:w-1/2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -10 x 8 x 6 Inch</li>
                        <li className='hover:text-orange-500 cursor-pointer'>3 Ply Corrugated Cardboard Box -12 x 9 x 4 Inch</li>
                    </div>
                </ul>
            </div>

            <div>
                <div>
                    <p className='text-3xl font-semibold'>Blog Posts</p>
                </div>
                <ul className='space-y-2 py-5 md:flex md:space-y-0 md:space-x-4'>
                    <div className='md:w-1/2 space-y-2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>Types of Corrugated Boards</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Packing for International Shipping</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Size Conversion Calculator</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Custom Printed Boxes at U-Pack</li>
                        <li className='hover:text-orange-500 cursor-pointer'>E-commerce Shipping and Packaging</li>
                    </div>
                    <div className='md:w-1/2 space-y-2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>Packaging Tips</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Common Shipping and Packaging Mistakes and How to Avoid Them</li>
                        <li className='hover:text-orange-500 cursor-pointer'>A Complete Guide to Shipping Options - Everything You Need to Know</li>
                    </div>
                    <div className='md:w-1/2 space-y-2 lg:w-1/3'>
                        <li className='hover:text-orange-500 cursor-pointer'>A Guide to Selecting the Right Shipping Box for Your Product</li>
                        <li className='hover:text-orange-500 cursor-pointer'>E-commerce Shipping and Packaging</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sitemap
