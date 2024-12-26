import React from 'react';
import img1 from '../assets/packing1.jpg';
import img2 from '../assets/packing2.jpg';
import img3 from '../assets/packing3.jpg';
import img4 from '../assets/packing4.jpg';
import img5 from '../assets/packing5.jpg';
import img6 from '../assets/packing6.jpg';
import img7 from '../assets/packing7.jpg';
import img8 from '../assets/packing8.jpeg';
import img9 from '../assets/packing9.jpg';
import img10 from '../assets/packing10.jpg';
import img11 from '../assets/packing11.jpg';
import img12 from '../assets/packing12.jpg';
import { PiHandbag } from "react-icons/pi";

function UserPackingMaterial() {
    // Data array containing image, description, and price details
    const packingMaterials = [
        { img: img1, title: 'Bubble Bag - Self Seal 70 GSM - 4W x 6H Inch', price: '₹2.92', lowPrice: '₹2.46' },
        { img: img2, title: 'Bubble Bag - Self Seal 70 GSM - 7W x 8H Inch', price: '₹4.22', lowPrice: '₹3.55' },
        { img: img3, title: 'Bubble Bag - Self Seal 70 GSM - 7W x 8H Inch', price: '₹4.22', lowPrice: '₹3.55' },
        { img: img4, title: 'Kraft Box - Self Seal 70 GSM - 7W x 8H Inch', price: '₹4.22', lowPrice: '₹3.55' },
        { img: img5, title: 'Kraft Box - Self Seal 70 GSM - 10W x 12H Inch', price: '₹6.50', lowPrice: '₹5.20' },
        { img: img6, title: 'Bubble Bag - Self Seal 70 GSM - 10W x 12H Inch', price: '₹6.50', lowPrice: '₹5.20' },
        { img: img7, title: 'Kraft Box - Self Seal 70 GSM - 12W x 14H Inch', price: '₹8.00', lowPrice: '₹6.40' },
        { img: img8, title: 'Bubble Pouch - Self Seal 70 GSM - 12W x 14H Inch', price: '₹8.00', lowPrice: '₹6.40' },
        { img: img9, title: 'Kraft Box - Self Seal 70 GSM - 14W x 16H Inch', price: '₹10.00', lowPrice: '₹8.00' },
        { img: img10, title: 'Kraft Box - Self Seal 70 GSM - 14W x 16H Inch', price: '₹10.00', lowPrice: '₹8.00' },
        { img: img11, title: 'Kraft Box - Self Seal 70 GSM - 16W x 18H Inch', price: '₹12.00', lowPrice: '₹9.60' },
        { img: img12, title: 'Bubble Bag - Self Seal 70 GSM - 16W x 18H Inch', price: '₹12.00', lowPrice: '₹9.60' },
    ];

    return (
        <div className='bg-stone-100'>
            <div className='pl-5 pt-5 xl:pt-20 xl:pb-4'>
                <p className='text-2xl xl:text-3xl font-semibold font-montserrat'>Packing Material</p>
                <p>Check all our popular packing materials</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-10 gap-5'>
                {packingMaterials.map((item, index) => (
                    <div key={index} className='relative'>
                        <div className='relative transition-shadow group hover:shadow-lg'>
                            <img src={item.img} alt={`img${index + 1}`} className='w-full h-48 border rounded-lg p-1' />
                            {/* Cart icon to be shown on hover */}
                            <div className='absolute top-4 left-44 inset-0 bg-opacity-40 duration-500 opacity-0 group-hover:opacity-100 transition-opacity'>
                                <PiHandbag className='text-gray-600 text-3xl border-2 border-gray-600 bg-white rounded-full p-1' />
                            </div>
                        </div>
                        <div className='pb-10'>
                            <p className='text-lg hover:text-orange-500 font-montserrat'>{item.title}</p>
                            <p className='text-2xl font-semibold'>{item.price}</p>
                            <p className='text-gray-400'>As low as <span className='text-gray-600'>{item.lowPrice}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPackingMaterial;
