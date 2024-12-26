import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import freeshippinglogo from '../assets/shipping.webp'
import gstlogo from '../assets/gst.webp'
import customerlogo from '../assets/customer.webp'
import isologo from '../assets/iso.webp'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Slider from "react-slick";
import img1 from "../assets/img1.webp"

const UserProductDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const products = [
        {
            name: 'Mailer Box (Blue + White)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (White)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (All Black)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (Pink + White)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (Orange + White)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (All Black)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (Pink + White)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
        {
            name: 'Mailer Box (Orange + White)',
            dimensions: '4 x 4 x 1 Inch',
            image: img1,
        },
    ];

    const testimonialsData = [
        {
            name: "Shloka S.",
            verified: true,
            date: "07/10/24",
            rating: 5,
            title: "Thank you for being prompt.",
            review: "Thank you for being prompt. When I called to enquire, you guys were very helpful. I received the items and am very happy with the quality.",
            product: "Kraft Mailing Tubes with Caps - 18 x 2.5 Inch"
        },
        {
            name: "John D.",
            verified: true,
            date: "05/14/24",
            rating: 4,
            title: "Good Quality Product",
            review: "The product quality is good. Delivery was on time, and the customer service was supportive.",
            product: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch"
        },
        {
            name: "Priya K.",
            verified: true,
            date: "03/22/24",
            rating: 5,
            title: "Highly Recommend!",
            review: "Excellent service and product. The team was very helpful, and the product met my expectations perfectly.",
            product: "Stretch Film Roll - 500mm x 300m"
        }
    ];
    const TestimonialCard = ({ testimonial }) => (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">
                    {testimonial.name}
                    {testimonial.verified && <span className="text-blue-500 ml-2">Verified Buyer</span>}
                </div>
                <div className="text-sm text-gray-500">{testimonial.date}</div>
            </div>
            <div className="flex items-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                ))}
            </div>
            <h3 className="mt-4 mb-10 text-xl font-semibold">{testimonial.title}</h3>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
            <p className="text-gray-500 mt-20">{testimonial.product}</p>
        </div>
    );

    const TestimonialSlider = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024, // md screens and up
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1280, // lg screens and up
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1536, // xl screens and up
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
            ],
        };


        return (
            
            <div className="py-10 px-20">
                <Slider {...settings}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="pl-3">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return (
        <div className="bg-[#fdf6f0] min-h-screen p-10 font-sans">
            <div className="">
                <nav className="text-sm text-gray-500 mb-4">
                    <a href="#" className="hover:underline">Home</a> &gt;
                    <a href="#" className="hover:underline"> 3 Ply Corrugated Cardboard Box - 3 x 2 x 3 Inch</a>
                </nav>


                <div className='xl:flex'>
                    <div className="flex flex-col xl:w-2/3 lg:flex-row lg:space-x-6">
                        {/* Product Image */}
                        <div className="flex-none w-full lg:w-1/4 mb-6 lg:mb-0 xl:w-1/3">
                            <div className="border h-64 w-full lg:w-64 xl:h-80 xl:w-80 p-4 bg-white">
                                <img className="w-full h-full object-cover" src={img1} alt="3 Ply Corrugated Cardboard Box" />
                            </div>
                            <div className="mt-4 hidden lg:block">
                                <div className="flex gap-2">
                                    <img src={img1} alt="Thumbnail 1" className="border p-1 h-16 w-16" />
                                    <img src={img1} alt="Thumbnail 2" className="border p-1  h-16 w-16" />
                                    <img src={img1} alt="Thumbnail 3" className="border p-1  h-16 w-16" />
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 w-full lg:w-3/4 md:justify-center lg:pl-5 xl:w-2/3">
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">3 Ply Corrugated Cardboard Box 3 x 2 x 3 Inch</h1>
                            <p className="text-gray-500 mb-4">Size in CM: 7.6 x 5.1 x 7.6</p>

                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Export quality 3 Ply: Fully dry & high strength</li>
                                <li>Made of high grade 200 GSM 45BF Imported kraft top liner: ECT: 25#</li>
                                <li>Great shipping box for gifts, office supplies, electronics, as well as other household items</li>
                                <li>High strength-to-weight ratio. Sustainably Sourced & Eco Friendly</li>
                                <li>Custom printing starting at ₹ 899</li>
                            </ul>

                            <div className="text-xl lg:text-2xl font-bold text-black mb-4">₹517.44 <span className="text-sm">(Pack Of 50)</span></div>
                            <p className="text-gray-500 text-sm mb-4">Inclusive of all taxes</p>

                            <div className="mb-4">
                                <p className="text-gray-600 mb-2">Also available in these designs & colours:</p>
                                <div className="flex flex-wrap gap-2">
                                    <div className="w-8 h-8 bg-gray-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-white border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-blue-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-yellow-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-green-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-pink-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-orange-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-black border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-blue-300 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-purple-500 border border-gray-300"></div>
                                    <div className="w-8 h-8 bg-red-500 border border-gray-300"></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center border rounded-md">
                                    <button className="px-3 py-2 text-lg">-</button>
                                    <input type="number" value="50" readOnly className="w-16 text-center py-2" />
                                    <button className="px-3 py-2 text-lg">+</button>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <Link to='/usercheckoutpage' className="bg-blue-800 hover:bg-orange-500 text-white items-center justify-center flem text-center py-2 px-6 rounded">ADD TO CART</Link>
                                <button className="bg-orange-500 text-white py-2 px-6 rounded">CUSTOMIZE</button>
                            </div>

                            <div className='space-y-3 pb-5'>
                                <div className=' '>
                                    <p className="text-gray-800 mb-2 text-lg font-semibold">Interested in larger quantities or custom size?</p>
                                    <div className='space-y-2 md:flex md:space-y-0 md:gap-3'>
                                        <p className='flex items-center gap-2'><MdOutlineMailOutline />Request a Quote</p>
                                        <p className='flex items-center gap-2'><CiShoppingTag />Request a Sample</p>
                                        <p className='flex items-center gap-2'><IoCallOutline />Call Us:(022) 4896 4040</p>
                                    </div>
                                </div>
                                <div className='space-y-3'>
                                    <p className='text-gray-700'>Buy 500 for <span className='text-xl'>₹11.42</span> each and <span className='font-bold'>save 15%</span></p>
                                    <p className='text-gray-700'>Buy 1000 for <span className='text-xl'>₹10.48</span> each and <span className='font-bold'>save 22%</span></p>
                                    <p className='text-gray-700'>Buy 2500 for <span className='text-xl'>₹9.41</span> each and <span className='font-bold'>save 30%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/3">
                        <div className="space-y-6 md:space-y-3 md:grid md:grid-cols-2 lg:space-y-0 lg:py-5 lg:grid-cols-4 lg:px-20 lg:pb-5 xl:grid-cols-1 xl:space-y-5">
                            <div className="flex items-center gap-2">
                                <img className='h-16 w-16' src={freeshippinglogo} alt="Free Shipping" />
                                <div>
                                    <p className="font-bold text-gray-800">Free Shipping</p>
                                    <p className="text-sm text-gray-500">on all orders over ₹1500*</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <img className='h-16 w-16' src={gstlogo} alt="GST Invoice" />
                                <div>
                                    <p className="font-bold text-gray-800">GST Invoice</p>
                                    <p className="text-sm text-gray-500">Up to 18% GST input tax credit</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <img className='h-16 w-16' src={customerlogo} alt="Customer Service" />
                                <div>
                                    <p className="font-bold text-gray-800">Customer Service</p>
                                    <p className="text-sm text-gray-500">(Mon-Sat, 9AM - 6PM)</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <img className='h-16 w-16' src={isologo} alt="ISO Certified" />
                                <div>
                                    <p className="font-bold text-gray-800">ISO 9001 Certified Company</p>
                                    <p className="text-sm text-gray-500">In Business Since 10 Years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* product related item  */}
                <div className=" p-6">
                    <h2 className="text-xl font-bold mb-4">PRODUCTS RELATED TO THIS ITEM</h2>
                    <div className="flex flex-nowrap overflow-x-auto gap-4 ">
                        {products.map((product, index) => (
                            <div key={index} className="group flex-shrink-0 w-60 flex flex-col items-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full border group-hover:scale-105 h-auto rounded-lg shadow-md"
                                />
                                <p className="text-center mt-2 font-semibold">{product.name}</p>
                                <p className="text-center text-gray-600">{product.dimensions}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='space-y-3 md:w-1/2'>
                        <div className='py-4'>
                            <div className='md:space-x-4'>
                                <button
                                    className={`text-lg ${!showMoreInfo ? 'text-orange-500 border-t border-t-orange-500 md:bg-gray-300 md:p-3 rounded' : 'text-gray-500'} border-b border-b-gray-600 py-2`}
                                    onClick={() => setShowMoreInfo(false)}
                                >
                                    DETAILS
                                </button>
                                <button
                                    className={`text-lg ${showMoreInfo ? 'text-orange-500 border-t border-t-orange-500 md:bg-gray-300 md:p-3 rounded' : 'text-gray-500'} border-b border-b-gray-600 py-2`}
                                    onClick={() => setShowMoreInfo(true)}
                                >
                                    MORE INFORMATION
                                </button>
                            </div>
                        </div>
                        <p className='pt-4'>
                            Our corrugated cardboard mailer boxes are perfect for any subscription business, as literature mailers, presentation box, luxury packaging, sales kit or great for any gift idea. We use high quality imported 50 BF kraft liners to make our premium kraft mailer boxes. Sustainably sourced & recyclable. Buy mailing boxes wholesale from Upack. Design online: add your logo and let your brand stand out! Measurements shown are Inside dimensions. Internal Dimensions: 102 x 102 x 25 mm (tolerance +/- 1/4")
                        </p>
                        <div>
                            <div>
                                <p className='font-bold'>U-Pack Corrugated Boxes Ply Options & Thickness:</p>
                                <ul className='pl-8 space-y-3 py-2'>
                                    <li><span className='font-bold'>1 Ply 1 MM Thick:</span> 450/350 GSM High Bulk 24 Pt Cardstock (Virgin Grade)</li>
                                    <li><span className='font-bold'>3 Ply 2.1 MM Thick E-Flute Corrugated Cardboard:</span> Lightweight and durable corrugated cardboard material suitable for fragile items.</li>
                                    <li><span className='font-bold'>3 Ply 3.2 MM Thick B-Flute Corrugated Cardboard:</span> Thick and strong corrugated cardboard material suitable for medium to heavier items.</li>
                                    <li><span className='font-bold'>5 Ply 6.1 MM Thick B/C-Flute Corrugated Cardboard:</span> Highly strong corrugated cardboard material suitable for very heavy items.</li>
                                    <li><span className='font-bold'>7 Ply 10 MM Thick B/C-Flute Corrugated Cardboard:</span> Extreme strength cardboard material suitable for heaviest items.</li>
                                </ul>
                            </div>
                            <div className='md:py-2 md:pb-5 md:space-y-2'>
                                <p className='font-bold'>Printed Sides Options:</p>
                                <ul className='list-disc font-bold pl-8'>
                                    <li>Outside Only - Flexo & Offset</li>
                                    <li>Inside Only - Flexo</li>
                                    <li>Outside and Inside - Offset+Flexo</li>
                                    <li>No Printing (Plain)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Conditional Table Display */}
                    <div className="max-w-4xl mx-auto p-6 md:w-1/2">
                        {showMoreInfo ? (
                            <table className="min-w-full bg-white border-gray-300">
                                <tbody>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Part No.</td>
                                        <td className="py-2 px-4">UPTFUC33ID</td>
                                    </tr>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Country of Manufacture</td>
                                        <td className="py-2 px-4 ">India</td>
                                    </tr>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Length</td>
                                        <td className="py-2 px-4">4</td>
                                    </tr>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Width</td>
                                        <td className="py-2 px-4">4</td>
                                    </tr>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Height</td>
                                        <td className="py-2 px-4">1</td>
                                    </tr>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Type</td>
                                        <td className="py-2 px-4">3 ply</td>
                                    </tr>
                                    <tr className="">
                                        <td className="py-2 px-4 font-bold">Color</td>
                                        <td className="py-2 px-4">Imported Kraft</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <table className="min-w-full bg-white border-gray-300">
                                <tbody>
                                    <tr className="bg-[#fdf6f0] border-2">
                                        <td className="py-2 px-4 border-b font-bold">Product Code</td>
                                        <td className="py-2 px-4 border-b">UPTFUC33ID</td>
                                    </tr>
                                    <tr className="bg-white border-2">
                                        <td className="py-2 px-4 border-b font-bold">Colour</td>
                                        <td className="py-2 px-4 border-b">Imported Kraft</td>
                                    </tr>
                                    <tr className="bg-[#fdf6f0] border-2">
                                        <td className="py-2 px-4 border-b font-bold">Ply/Grade</td>
                                        <td className="py-2 px-4 border-b">3 Ply</td>
                                    </tr>
                                    <tr className="bg-white border-2">
                                        <td className="py-2 px-4 border-b font-bold">Size</td>
                                        <td className="py-2 px-4 border-b">4 x 4 x 1 inch</td>
                                    </tr>
                                    <tr className="bg-[#fdf6f0] border-2">
                                        <td className="py-2 px-4 border-b font-bold">Box Style</td>
                                        <td className="py-2 px-4 border-b">Mailer Boxes</td>
                                    </tr>
                                    <tr className="bg-white border-2">
                                        <td className="py-2 px-4 border-b font-bold">Bundle Qty.</td>
                                        <td className="py-2 px-4 border-b">100/pack</td>
                                    </tr>
                                    <tr className="bg-[#fdf6f0] border-2">
                                        <td className="py-2 px-4 border-b font-bold">Note</td>
                                        <td className="py-2 px-4 border-b">Custom printing & sizes available. Call for details.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>


                {/* questions and answers  */}
                <div>
                    <p className='text-xl font-bold'>CUSTOM MAILING BOXES FOR YOUR BRAND</p>

                    <div className='space-y-5 py-3'>

                        <p>Quality Carton and Cardboard Boxes from U-Pack: Are you a small business owner unable to place bulk packaging orders due to storage limitations? Or are you relocating and requiring premium Ecommerce boxes to secure your cherished possessions? U-Pack is your one-stop solution. We offer an extensive range of sizes of packing boxes, from small cube boxes and regular-sized cartons to extra-long boxes for oddly shaped items.</p>
                        <p>With their high strength-to-weight ratio, our boxes made with imported kraft liners offer versatility and cost-effectiveness, meeting both business and home needs. Whether you're searching for packaging boxes for office use, commercial purposes, or personal use, U-Pack has you covered. We provide delivery throughout India, serving as a comprehensive online solution for your packaging and shipping needs.</p>
                        <p>U-Pack also offers its clients high-quality premier design, and luxury packaging for personalized gift boxes in all packing materials, from wood to carton board to metals and plastics.Discover the Best Range of Packaging Materials in India: U-Pack offers a wide selection of corrugated boxes in different styles and sizes. Whether you need long boxes, flat boxes, festive boxes, office boxes, or cube boxes, we have you covered. Buy in bulk and take advantage of our customization services to brand your packaging with your logo and design.</p>

                    </div>

                    <div className='space-y-5'>
                        <p className='text-2xl font-bold'>Frequently Asked Questions</p>
                        <div>
                            <p className='font-bold py-3'>Q: What are the steps to customize and print my artwork?</p>
                            <ul className='list-disc pl-8'>
                                <li>Select the "Customize" feature from the product menu, if available for your chosen product.</li>
                                <li>Avail of the opportunity to print Single Colour Artwork on all surfaces of the box. The minimum order quantity for this service is just 100 boxes and prices start from Rs. 899 only without any die charges!</li>
                                <li>You also have the choice to print Multi Colour Artwork (offset and or litho lamination) on all sides of the box, complete with a Coating. For this, the minimum order quantity starts at 1000 boxes.</li>
                                <li>To submit your artwork, click on the Upload button and adjust the graphics as needed on each side of the box. U-Pack is the only company in India to offer 3D online design tool with dynamic visualisation.</li>
                                <li>If you don't possess any artwork, simply forward your logo to us and we will create the artwork on your behalf.</li>
                                <li>If you lack a logo, just provide your brand name and we'll design a logo that reflects your brand.</li>
                                <li>Our dedicated design team will collaborate with you to create a design and then share it with you via email.</li>
                                <li>We're happy to edit the design until you're completely satisfied with it.</li>
                                <li>The entire process, based on your requirements, spans between 2-5 days.</li>
                                <li>After finalizing the artwork, we require 1-2 days to print and dispatch the boxes for Single Colour Artwork.</li>
                                <li>In the case of Multi Colour Artwork, after finalization, it typically takes 5-14 days for us to print and dispatch the boxes.</li>
                                <li>We do not impose any charges for Prepress services like Designing, Cylinder, plate making, or Films. We also do not charge for punch, die-making.</li>
                                <li>There are no hidden one-time costs involved.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: Can I buy a single mailing box?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> Yes, you can order a sample mailing box. Click the link in the footer for samples.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: Can I assemble the mailing box myself?</p>
                            <p><span className='font-bold'>A:</span> Assembling a mailer box is quite simple. The box comes in a flat form and is pre-scored for effortless assembly. Just follow these steps to prepare your custom box:</p>
                            <ul className='list-disc pl-8'>
                                <li>Fold the pre-scored lines inward.</li>
                                <li>Lift the front and back flaps</li>
                                <li>Raise the side walls of the box, tuck them in, and click into place.</li>
                                <li>The mailer box is now assembled and ready to be used.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: How will my boxes be shipped?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> All boxes are flat and unassembled. We take great care in packing the boxes and ensuring the corners are protected during transit.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: When will I receive my mailing boxes?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> We ensure rapid processing, with 99% of orders being dispatched within 48 hours and a delivery window of 1-4 days across India. We can complete production in 1 business day if you need an expedited service.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: Can I ship my mailer box without using any other extra packaging?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> We use 50 BF paper for our boxes, which are highly strong and durable for shipping. For custom-printed boxes or high-end white mailers, we suggest adding an extra cardboard box to enhance the unboxing experience.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold p-3'>Q: What will the finish of the mailer boxes look like?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> The final look of your boxes depends on the type of paper you pick. Our Kraft liners are premium uncoated fiber grade giving a natural rustic look with a slight sheen. Our White paper is pure fiber slightly coated export quality satin feel. Our black paper is imported from Koehler, Germany, and has a linen content giving a luxury finish. Other color options are acid-free papers giving a clean high fidelity tactile feel. Flexo on these gives a matte finish and offset (glossy ink) will provide a brighter luster due to the high-gloss UV ink that's used.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: Can I order a box type other than cartons, shippers, and flat mailing boxes?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> We are a manufacturer with house rotary die cutting and full printing infrastructure. We can quickly make any custom mailing box and carton with any kind of custom printing, embossing, lamination, and window patching. Call us at (022) 4896 4040 to get started</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: Can I print on the inside and outside of the box?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> Yes, you can print both the outside and inside of your mailer boxes online using our 3D design tool. Select Add 'Inside Print' on the design module and double-click on each side to upload your artwork files and logo.</li>
                            </ul>
                        </div>

                        <div>
                            <p className='font-bold py-3'>Q: How can I get a keyline diagram?</p>
                            <ul className=''>
                                <li><span className='font-bold'>A:</span> Please email us or call us at (022) 4896 4040 and we will send you the dieline free of charge.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div>
                    <TestimonialSlider />
                </div>
            </div>
        </div>
    );
};

export default UserProductDetail;