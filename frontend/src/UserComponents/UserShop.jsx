import React from 'react'
import img1 from '../assets/shop1.webp'
import img2 from '../assets/shop2.webp'
import img3 from '../assets/shop3.webp'
import img4 from '../assets/shop4.webp'

function UserShop() {
    return (
        <div className=''>
            <div className='md:py-10 md:gap-10  px-4 space-y-4 grid md:grid-cols-2 xl:grid-cols-4 md:space-y-0 '>
                <div className='relative'>
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                    <div className='absolute bottom-5 px-8 space-y-5 text-start  '>
                        <div className='space-y-2'>
                            <p className='font-bold text-2xl font-montserrat'>Cardboard Boxes for Packing</p>
                            <p>Custom Printed</p>
                        </div>
                        <div>
                            <button className='bg-blue-800 hover:bg-orange-500 text-white py-4 px-8 rounded '>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                    <div className='absolute top-16 lg:top-24 px-14 md:left-10 lg:left-20 xl:left-6 space-y-5 text-center'>
                        <div className='space-y-2'>
                            <p className='font-bold text-2xl font-montserrat' >Corrugated pads</p>
                            <p>Single & Double Wall</p>
                        </div>
                        <div>
                            <button className='bg-blue-800 hover:bg-orange-500 text-white py-4 px-8 rounded '>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='relative '>
                    <div>
                        <img src={img3} alt="img2" />
                    </div>
                    <div className='absolute top-16 lg:top-24 px-16  md:left-10 lg:left-20 xl:left-6 space-y-5 text-center'>
                        <div className='space-y-2'>
                            <p className='font-bold text-2xl font-montserrat' >Courier Bags</p>
                            <p>Custom Printed</p>
                        </div>
                        <div>
                            <button className='bg-blue-800 hover:bg-orange-500 text-white py-4 px-8 rounded '>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={img4} alt="img4" />
                    </div>
                    <div className='absolute top-40 lg:top-56 xl:top-64 inset-0 flex flex-col items-center justify-center space-y-5 '>
                       <div className='relative'>
                       <div className='border-4 border-black p-3 pb-12 px-12  text-center'>
                            <p className='font-bold text-2xl font-montserrat'>PACKING MATERIAL</p>
                        </div>
                        <div className='flex flex-col items-center justify-center absolute -bottom-4 left-[100px] '>
                            <button className='bg-blue-800 hover:bg-orange-500 text-white py-4 px-7 rounded'>SHOP NOW</button>
                        </div>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserShop
