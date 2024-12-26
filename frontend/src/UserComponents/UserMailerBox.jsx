// src/components/UserMailerBox.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img1 from '../assets/upack_mailers.webp';
import m1 from '../assets/m1.jpg';
import faqbookimg from '../assets/mailerfaqs.webp';
import { GoDotFill } from 'react-icons/go';
import boxsize from '../assets/sizebox.webp';
import kraftcolor from '../assets/kraftcolor.png';
import whitecolor from '../assets/whitecolor.webp';
import blackcolor from '../assets/blackcolor.jpeg';
import rubyredcolor from '../assets/rubyredcolor.jpeg';
import greencolor from '../assets/greencolor.jpeg';
import royalbluecolor from '../assets/bluecolor.jpeg';
import pinkcolor from '../assets/pinkcolor.jpeg';
import yellowcolor from '../assets/yellowcolor.jpeg';
import goldcolor from '../assets/goldcolor.jpeg';
import graycolor from '../assets/graycolor.png';
import orangecolor from '../assets/orangecolor.jpeg';
import sapphirebluecolor from '../assets/sapphireblue.jpeg';
import bordeauxredcolor from '../assets/bordeauxredcolor.jpeg';
import magentacolor from '../assets/magentacolor.jpeg';
import moccabrowncolor from '../assets/moccabrowncolor.jpeg';
import box1 from '../assets/packing4.jpg';
import s2 from '../assets/packing7.jpg';
import allcolor from '../assets/allcolor.jpeg'
import whitebox from '../assets/whitebox.jpg'
import bordeauxred from '../assets/bordeauxred.jpg'
import blackbox from '../assets/blackbox.jpg'
import pinkbox from '../assets/pinkbox.jpg'
import greenbox from '../assets/greenbox.jpg'
import bluebox from '../assets/bluebox.jpg'
import rubyred from '../assets/rubyredbox.jpg'
import yellowbox from '../assets/yellowbox.jpg'
import goldbox from '../assets/goldbox.jpg'
import graybox from '../assets/graybox.jpg'
import orangebox from '../assets/orangebox.jpg'
import sapphirebluebox from '../assets/sapphirebluebox.jpg'
import magentabox from '../assets/magentabox.jpg'
import moccabrownbox from '../assets/moccabrownbox.jpg'


const products = [
  { image: bluebox, title: "3 Ply Corrugated Cardboard Box", size: "4 x 2 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Royal Blue" },
  { image: whitebox, title: "3 Ply Corrugated Cardboard Box", size: "6 x 4 x 7 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "White" },
  { image: orangebox, title: "3 Ply Corrugated Cardboard Box", size: "4 x 3 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Orange" },
  { image: graybox, title: "3 Ply Corrugated Cardboard Box", size: "7 x 3 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Gray" },
  { image: goldbox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 5 x 4 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Gold" },
  { image: bluebox, title: "3 Ply Corrugated Cardboard Box", size: "8 x 4 x 5 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Royal Blue" },
  { image: yellowbox, title: "3 Ply Corrugated Cardboard Box", size: "15 x 6 x 7 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Yellow" },
  { image: pinkbox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 3 x 6 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Pink" },
  { image: moccabrownbox, title: "3 Ply Corrugated Cardboard Box", size: "14 x 6 x 5 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Mocca Brown" },
  { image: rubyred, title: "3 Ply Corrugated Cardboard Box", size: "6 x 4 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Ruby Red" },
  { image: yellowbox, title: "3 Ply Corrugated Cardboard Box", size: "10 x 5 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Yellow" },
  { image: sapphirebluebox, title: "3 Ply Corrugated Cardboard Box", size: "12 x 6 x 5 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Sapphire Blue" },
  { image: bluebox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 5 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Royal Blue" },
  { image: goldbox, title: "3 Ply Corrugated Cardboard Box", size: "6 x 4 x 7 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Gold" },
  { image: yellowbox, title: "3 Ply Corrugated Cardboard Box", size: "10 x 6 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Yellow" },
  { image: blackbox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 4 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Deep Black" },
  { image: moccabrownbox, title: "3 Ply Corrugated Cardboard Box", size: "9 x 7 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Mocca Brown" },
  { image: greenbox, title: "3 Ply Corrugated Cardboard Box", size: "7 x 4 x 6 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Green" },
  { image: greenbox, title: "3 Ply Corrugated Cardboard Box", size: "10 x 6 x 7 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Green" },
  { image: magentabox, title: "3 Ply Corrugated Cardboard Box", size: "15 x 5 x 6 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Magenta" },
  { image: whitebox, title: "3 Ply Corrugated Cardboard Box", size: "13 x 8 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "White" },
  { image: rubyred, title: "3 Ply Corrugated Cardboard Box", size: "7 x 4 x 6 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Ruby Red" },
  { image: goldbox, title: "3 Ply Corrugated Cardboard Box", size: "10 x 7 x 5 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Gold" },
  { image: bluebox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 5 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Royal Blue" },
  { image: pinkbox, title: "3 Ply Corrugated Cardboard Box", size: "6 x 3 x 7 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Pink" },
  { image: box1, title: "3 Ply Corrugated Cardboard Box", size: "13 x 6 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Imported Kraft" },
  { image: goldbox, title: "3 Ply Corrugated Cardboard Box", size: "8 x 4 x 6 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Gold" },
  { image: graybox, title: "3 Ply Corrugated Cardboard Box", size: "15 x 4 x 6 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Gray" },
  { image: sapphirebluebox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 3 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Sapphire Blue" },
  { image: rubyred, title: "3 Ply Corrugated Cardboard Box", size: "8 x 3 x 7 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Ruby Red" },
  { image: bordeauxred, title: "3 Ply Corrugated Cardboard Box", size: "4 x 5 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Bordeaux Red" },
  { image: blackbox, title: "3 Ply Corrugated Cardboard Box", size: "4 x 3 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Deep Black" },
  { image: bluebox, title: "3 Ply Corrugated Cardboard Box", size: "9 x 5 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Royal Blue" },
  { image: goldbox, title: "3 Ply Corrugated Cardboard Box", size: "4 x 6 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Gold" },
  { image: yellowbox, title: "3 Ply Corrugated Cardboard Box", size: "7 x 5 x 3 Inch", prices: [9.24, 9.24, 9.24, 6.47], qty: 50, color: "Yellow" },
  { image: blackbox, title: "3 Ply Corrugated Cardboard Box", size: "4 x 4 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Deep Black" },
  { image: bluebox, title: "3 Ply Corrugated Cardboard Box", size: "5 x 2 x 3 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Royal Blue" },
  { image: orangebox, title: "3 Ply Corrugated Cardboard Box", size: "10 x 6 x 4 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Orange" },
  { image: sapphirebluebox, title: "3 Ply Corrugated Cardboard Box", size: "12 x 7 x 5 Inch", prices: [10.84, 10.84, 10.84, 7.58], qty: 50, color: "Sapphire Blue" }
];

const featuredProducts = [
  { id: 1, image: m1, title: "3 Ply Mailer Box -", price: "₹8.40", lowPrice: "₹6.89" },
  { id: 2, image: s2, title: "3 Ply Mailer Box -", price: "₹11.98", lowPrice: "₹9.83" },
  { id: 3, image: m1, title: "3 Ply Mailer Box -", price: "₹27.96", lowPrice: "₹19.57" },
  { id: 4, image: s2, title: "5 Ply Mailer Box -", price: "₹7.40", lowPrice: "₹6.89" },
  { id: 5, image: m1, title: "5 Ply Mailer Box -", price: "₹15.98", lowPrice: "₹9.83" },
  { id: 6, image: s2, title: "5 Ply Mailer Box -", price: "₹30.96", lowPrice: "₹19.57" },
  { id: 7, image: s2, title: "5 Ply Mailer Box -", price: "₹7.40", lowPrice: "₹6.89" },
  { id: 8, image: m1, title: "5 Ply Mailer Box -", price: "₹15.98", lowPrice: "₹9.83" },
  { id: 9, image: s2, title: "5 Ply Mailer Box -", price: "₹30.96", lowPrice: "₹19.57" },
];

function UserMailerBox() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [selectedColor, setSelectedColor] = useState("all");
  const [length, setLength] = useState(25);
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(8);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const parseSize = (size) => {
    const [l, w, h] = size.replace(' Inch', '').split(' x ').map(dim => parseFloat(dim));
    return { length: l, width: w, height: h };
  };


  const filteredProducts = products.filter((product) => {
    const { length: pLength, width: pWidth, height: pHeight } = parseSize(product.size);

    const isColorMatch = selectedColor === 'all' || product.color.toLowerCase() === selectedColor.toLowerCase();
    const isSizeMatch = pLength >= 4 && pLength <= length &&
      pWidth >= 2 && pWidth <= width &&
      pHeight >= 1 && pHeight <= height;

    console.log(`Product: ${product.title}`);
    console.log(`Size: ${pLength} x ${pWidth} x ${pHeight}`);
    console.log(`Color Match: ${isColorMatch}`);
    console.log(`Size Match: ${isSizeMatch}`);
    console.log(`Include: ${isColorMatch && isSizeMatch}`);

    return isColorMatch && isSizeMatch;
  });



  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const featuredProductChunks = chunkArray(featuredProducts, 3);


  return (
    <div>
      <div className='px-4 border-b'>
        <div className='xl:flex xl:flex-row-reverse'>
          <div className='xl:w-1/2 bg-[#FFFBF7] xl:pt-10'>
            <img src={img1} alt="img" />
          </div>
          <div className='py-10 xl:w-1/2 lg:pl-12 bg-[#FFFBF7]'>
            <p className='text-3xl font-light'>High Quality Mailer Boxes</p>
            <ul className='text-sm space-y-2 py-4 pl-6'>
              <li className='flex items-center gap-2'><GoDotFill />Made with Premium Imported Papers</li>
              <li className='flex items-center gap-2'><GoDotFill />No die or graphics charges. Thousands of Sizes.</li>
              <li className='flex items-center gap-2'><GoDotFill />Free rush production. Free shipping</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-[#FFFBF7] lg:flex '>
        {/* L H S */}

        <div className='p-4 lg:w-1/4 scroll-m-96 sticky top-0'>
          {/* color selector  */}
          <div className='py-5 '>
            <p className='text-lg font-semibold'>COLOR</p>
            <hr className='border-b' />
            <ul className='px-5 py-5 space-y-2'>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('all')}>
                <img className='h-5 w-5 border-2' src={allcolor} alt="All" /> All
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Imported Kraft')}>
                <img className='h-5 w-5 border-2' src={kraftcolor} alt="kraftcolor" /> Imported Kraft
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('White')}>
                <img className='h-5 w-5 border-2' src={whitecolor} alt="kraftcolor" /> White
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Deep Black')}>
                <img className='h-5 w-5 border-2' src={blackcolor} alt="kraftcolor" /> Deep Black
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Pink')}>
                <img className='h-5 w-5 border-2' src={pinkcolor} alt="kraftcolor" /> Pink
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Green')}>
                <img className='h-5 w-5 border-2' src={greencolor} alt="kraftcolor" /> Green
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Royal Blue')}>
                <img className='h-5 w-5 border-2' src={royalbluecolor} alt="kraftcolor" /> Royal Blue
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Ruby Red')}>
                <img className='h-5 w-5 border-2' src={rubyredcolor} alt="kraftcolor" /> Ruby Red
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Yellow')}>
                <img className='h-5 w-5 border-2' src={yellowcolor} alt="kraftcolor" /> Yellow
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Gold')}>
                <img className='h-5 w-5 border-2' src={goldcolor} alt="kraftcolor" /> Gold
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Gray')}>
                <img className='h-5 w-5 border-2' src={graycolor} alt="kraftcolor" /> Gray
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Orange')}>
                <img className='h-5 w-5 border-2' src={orangecolor} alt="kraftcolor" /> Orange
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Sapphire Blue')}>
                <img className='h-5 w-5 border-2' src={sapphirebluecolor} alt="kraftcolor" /> Sapphire Blue
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Bordeaux Red')}>
                <img className='h-5 w-5 border-2' src={bordeauxredcolor} alt="kraftcolor" /> Bordeaux Red
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Magenta')}>
                <img className='h-5 w-5 border-2' src={magentacolor} alt="kraftcolor" /> Magenta
              </li>
              <li className='flex items-center gap-2 cursor-pointer hover:scale-105 duration-300' onClick={() => handleColorClick('Mocca Brown')}>
                <img className='h-5 w-5 border-2' src={moccabrowncolor} alt="kraftcolor" /> Mocca Brown
              </li>
            </ul>
          </div>

          {/* range selector  */}
          <div className=''>
            <div className="mx-4 p-5 rounded flex flex-col items-start font-montserrat">
              <label htmlFor="length-range" className="text-lg font-semibold">LENGTH (IN)</label>
              <hr className='border w-full mb-5' />
              <input
                id="length-range"
                type="range"
                min="4.00"
                max="25.00"
                value={length}
                onChange={(e) => setLength(parseFloat(e.target.value))}
                className="w-full appearance-none bg-gray-200 text-blue-700 h-1 rounded-lg focus:outline-none"
              />
              <div className='flex justify-center items-center text-center pt-3'>
                <p>{`4.00 Inch - ${length}.00 Inch`}</p>
              </div>
            </div>

            <div className="mx-4 p-5 rounded flex flex-col items-start font-montserrat">
              <label htmlFor="width-range" className="text-lg font-semibold">WIDTH (IN)</label>
              <hr className='border w-full mb-5' />
              <input
                id="width-range"
                type="range"
                min="2"
                max="20"
                value={width}
                onChange={(e) => setWidth(parseFloat(e.target.value))}
                className="w-full appearance-none bg-gray-200 text-blue-500 h-1 rounded-lg focus:outline-none"
              />
              <div className='flex justify-center items-center text-center pt-3'>
                <p>{`2.00 Inch - ${width}.00 Inch`}</p>
              </div>
            </div>

            <div className="mx-4 p-5 rounded flex flex-col items-start font-montserrat">
              <label htmlFor="height-range" className="text-lg font-semibold">HEIGHT (IN)</label>
              <hr className='border w-full mb-5' />
              <input
                id="height-range"
                type="range"
                min="1"
                max="8"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
                className="w-full appearance-none bg-gray-200 text-blue-500 h-1 rounded-lg focus:outline-none"
              />
              <div className='flex justify-center items-center text-center pt-3'>
                <p>{`1.00 Inch - ${height}.00 Inch`}</p>
              </div>
            </div>
          </div>


          {/* features  */}

          <div className=''>
            <p className="text-lg font-semibold py-8">FEATURED</p>
            <hr className="border-b" />
            <Slider {...settings} className="py-5">
              {featuredProductChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="space-y-8">
                  {chunk.map((product) => (
                    <div key={product.id} className="flex gap-3">
                      <div className="h-16 w-16 border-2">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-600">{product.title}</p>
                        <p className="flex-col flex">
                          <span className="font-medium">{product.price}</span>{" "}
                          <span className="text-gray-400">
                            As low as{" "}
                            <span className="text-gray-700 text-sm">{product.lowPrice}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>


        {/* R H S */}
        <div className='lg:w-2/3 lg:pb-10'>
          <div className='lg:flex lg:py-5 lg:items-center'>
            <div className='flex justify-center lg:h-44 lg:w-1/3'>
              <img src={boxsize} alt="img" />
            </div>
            <div className='lg:w-2/3'>
              <div className='flex flex-col items-center md:items-start space-y-2 py-2'>
                <p className='font-semibold text-xl'>Find the right sized box</p>
                <p className='text-orange-600 font-medium'>From a choice of over 5000!</p>
              </div>
              <div className='flex gap-2'>
                <div className='lg:w-2/3 flex gap-4 '>
                  <input className='w-1/3 border-b-2 shadow-md p-4 border-blue-800  rounded-lg' placeholder='L-inch' type="search" />
                  <input className='w-1/3 border-b-2 shadow-md p-4 border-blue-800 rounded-lg' placeholder='W-inch' type="search" />
                  <input className='w-1/3 border-b-2 shadow-md p-4 border-blue-800 rounded-lg' placeholder='H-inch' type="search" />
                </div>
                <div className='flex md:items-center lg:w-1/3'>
                  <button className='bg-blue-800 text-white w-full mx-auto md:w-32 lg:w-24 py-3 rounded my-5 font-medium hover:bg-orange-500'>SEARCH</button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto py-10">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2"></th>
                  <th className="py-2 text-left">Product</th>
                  <th className="py-2 text-left">Size</th>
                  <th className="py-2 text-left">Price ea.</th>
                  <th className="py-2 text-left pl-10">Qty</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2 pl-6">
                        <Link to='/userproductdetailpage'>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 md:w-16 md:h-16 object-cover hover:scale-150 duration-300 hover:border border-orange-500"
                          />
                        </Link>
                      </td>
                      <Link to='/userproductdetailpage'>
                        <td className="py-2 px-2">
                          <div className="text-sm md:text-base  hover:underline">{product.title}</div>
                          <button className="mt-2 text-orange-500 font-medium border border-orange-500 hover:bg-orange-500 hover:text-white  py-1 px-3 text-xs md:text-sm rounded">
                            Customize
                          </button>
                        </td>
                      </Link>
                      <td className="py-2 px-2 text-sm md:text-base">{product.size}</td>
                      <td className="py-2 px-2">
                        <div className="grid grid-cols-4 gap-2 text-xs md:text-sm">
                          {product.prices.map((price, i) => (
                            <div key={i} className="text-center">
                              {price.toFixed(2)}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-2 px-2 lg:space-x-5 text-center">
                        <input
                          type="number"
                          value={product.qty}
                          className="w-12 md:w-16 text-center border rounded-md text-xs md:text-sm"
                          readOnly
                        />
                        <button className="mt-2 bg-blue-500 text-white hover:bg-blue-600 py-1 px-3 text-xs md:text-sm rounded">
                          Add
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-4 text-center">Product Not Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div>
            <div className='px-4 space-y-3'>
              <p className='text-2xl font-bold underline'>Customised Mailer Boxes</p>
              <p>All our mailer boxes are made with imported premium cardboard making them great for packing, subscription boxes, gift boxes, and e-commerce packaging. </p>
              <p>Our tab-locking mailing boxes (corrugated mailers) are perfect for any subscription business, as literature mailers, postal boxes, presentation box, sales kit or great for any gift idea. The front flap locks into the main cardboard mailer body and the tuck in flaps lock in the box adding overall strength to the design. Communicate your brand with our full color custom printed mailers. Free 2D mockup and dieline. Mock-ups help you visualize your packaging before they are bulk printed. Use our online intuitive design tool to show your customers what the orders would look like.</p>
              <p>Upack offers over 5000 sizes of corrugated boxes, cardboard shipping boxes & shipping supplies. Everything from small cardboard boxes to large shippers. We keep adding more boxes for shipping every month to our catalog. We also offer a variety of printing and customization options for an array of packaging supplies such as custom boxes, custom printed mailers, custom packaging tape, printed shopping bags, printed grocery bags, printed bubble mailers, and more!</p>
              <p>100 % satisfaction guarantee with hassle free returns. If you have a question, comment, or concern about your packaging and shipping supplies, please call us at (022) 4896 4040 and we would be happy to help in any way we can.</p>
            </div>

            <div>
              <div className='flex-col justify-center text-center p-4'>
                <p className='text-2xl'>Customised Subscription Boxes FAQs</p>
                <img src={faqbookimg} alt="img1" />
              </div>

              <div className='px-4 space-y-4'>
                <div>
                  <p className='text-lg font-bold italic'>What sizes mailer boxes are available on U-Pack?</p>
                  <p>We have one of the largest collections of mailer boxes in India. We also have coloured gift boxes like pink mailer boxes, red boxes, black mailer boxes, orange packing boxes, blue carton boxes and more! We can also make any customised box in less that 24 hrs. Call us at (022) 4896 4040 or email us for a custom quote.</p>
                </div>
                <div>
                  <p className='text-lg font-bold italic'>Flutes & board quality?</p>
                  <p>We use the finest papers from India, US & Germany for our mailers. Our premium mailer boxes are made with high bust factor paper and 25 ECT e-flute corrugated cardboard. Large mailers are made with 32 ECT C Flute corrugated material. Yes, you can order one sample mailer box.</p>
                </div>
                <div>
                  <p className='text-lg font-bold italic'>How can I add my logo and graphics to make customised boxes?</p>
                  <p>Creating a custom mailer box online takes minutes with our 3D design tool. You can upload your artwork and logo online using our intuitive 3D Design Studio. We can print both on the outside as well as the inside of our mailer boxes. We use multi colour flexo printing, full color CMYK offset, litho lamination and or digital printing.</p>
                </div>
                <div>
                  <p className='text-lg font-bold italic'>What if I don't have vector (EPS, AI & CDR) or source file?</p>
                  <p>Our in-house designers are ready to help with your printed carton requirements. While other vendors charge you for basic graphics work like adding transparency, color change, positioning, etc we at U-Pack work with you one on one to resolve these basic graphics issues at no extra cost and make sure you get the best print quality on your custom mailer boxes. Our designers will even vectorize most artworks. So you can save cost by not having to hire outside graphics agency.</p>
                </div>
                <div>
                  <p className='text-lg font-bold italic'>What about die charges?</p>
                  <p>U-Pack does not charge die or punch charges for any of our boxes from our catalog of 20000 products! You can even order 5 die cut boxes without any die charges.</p>
                </div>
                <div>
                  <p className='text-lg font-bold italic'>How fast will U-Pack ship fully customised boxes?</p>
                  <p>U-pack has one of the fastest lead times in the custom boxes market. FREE rush production in 24 hrs and FREE shipping PAN India. For packaging supplies outside India, U-Pack has partnered with Ucanpack for supplies to the United States & Canada. We use top logistics partners to ensure you receive your shipment at your door in 24 to 72 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMailerBox;
