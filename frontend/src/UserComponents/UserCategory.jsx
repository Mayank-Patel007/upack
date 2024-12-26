import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

// import img1 from '../assets/img1.webp'
// import img2 from '../assets/img2.webp'
// import img3 from '../assets/img3.webp'
// import img4 from '../assets/img4.webp'
// import img5 from '../assets/img5.webp'
// import img6 from '../assets/img6.webp'
// import img7 from '../assets/img7.webp'
// import img8 from '../assets/img8.webp'
// import img9 from '../assets/img9.webp'
// import img10 from '../assets/img10.webp'
// import img11 from '../assets/img11.webp'
// import img12 from '../assets/img12.webp'
// import img13 from '../assets/img13.webp'
// import img14 from '../assets/img14.webp'
// import img15 from '../assets/img15.webp'
// import img16 from '../assets/img16.webp'
// import img17 from '../assets/img17.webp'
// import img19 from '../assets/img19.webp'

// const categories = [
//     { imgSrc: img1, title: 'MAILER BOXES', link: '/mailerbox' }, // Add a link property
//     { imgSrc: img2, title: 'KRAFT SHIPPING BOXES', link: '/kraft-shipping-boxes' },
//     { imgSrc: img3, title: 'WHITE SHIPPING BOXES', link: '/white-shipping-boxes' },
//     { imgSrc: img4, title: 'FOLDING CARTONS', link: '/folding-cartons' },
//     { imgSrc: img5, title: 'PACKING TAPES', link: '/packing-tapes' },
//     { imgSrc: img6, title: 'CORRUGATED SHEETS', link: '/corrugated-sheets' },
//     { imgSrc: img7, title: 'COLOR SHIPPING BOXES', link: '/color-shipping-boxes' },
//     { imgSrc: img8, title: 'CHONEYCOMB PAPER BUBBLE', link: '/choneycomb-paper-bubble' },
//     { imgSrc: img9, title: 'CARRY BAGS', link: '/carry-bags' },
//     { imgSrc: img10, title: 'SHREDDED TISSUE', link: '/shredded-tissue' },
//     { imgSrc: img11, title: 'BUBBLE ROLL WRAP', link: '/bubble-roll-wrap' },
//     { imgSrc: img12, title: 'COURIER BAGS', link: '/courier-bags' },
//     { imgSrc: img13, title: 'PREPRINTED MAILERS', link: '/preprinted-mailers' },
//     { imgSrc: img14, title: 'COLOUR MAILER BOXES', link: '/colour-mailer-boxes' },
//     { imgSrc: img15, title: 'STRETCH FILM', link: '/stretch-film' },
//     { imgSrc: img16, title: 'CORRUGATED ROLLS', link: '/corrugated-rolls' },
//     { imgSrc: img17, title: 'EPE FORM ROLLS', link: '/epe-form-rolls' },
//     { imgSrc: img19, title: 'PADDED ENVELOPES', link: '/padded-envelopes' }
// ];


function UserCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch data from the backend using axios
        const fetchSubCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3006/api/product/getAllSubCategoryDetails'); // Adjust the endpoint if needed
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchSubCategories();
    }, []);
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:px-20 bg-[#fee6da]'>
            {categories.map((category, index) => (
                <div key={index} className='p-2 bg-[#fee6da] flex-col justify-center items-center text-center'>
                    <Link to={category.link} className='block p-4 group'> {/* Wrap the content in a Link */}
                        <img className=' bg-[#ead4c9] group-hover:bg-[#d2bcb1] duration-300 ' src={`http://localhost:3006/api/logo/download/${category.photo}`} alt={category.alt} />
                        <p className='font-bold mt-2 group-hover:text-orange-500 font-montserrat '>{category.category}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default UserCategory
