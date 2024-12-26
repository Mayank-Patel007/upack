import React,{useEffect} from 'react';
import blog from "../assets/mailerfaqs.webp"
const blogPosts = [
    {
        date: '30',
        month: 'Jan',
        day: '30 Jan 2024',
        title: 'The Impact of Packaging on Online Customer Experience',
        content: [
            'Packaging plays a crucial role in the online customer experience. It is often the first physical interaction that customers have with your brand, and it can greatly influence their perception of your business. In fact, studies have shown that packaging has a direct impact on customer satisfaction and loyalty.',
            'When it comes to businesses like e-commerce, packaging should be considered an important part of their overall strategy. The perfect packaging not only gives protection to the product during transportation, but it also enhances the unboxing experience for the customer. This is essential for small and medium-sized businesses operating in India’s competitive markets.'
        ],
        imageUrl: blog,
    },
    {
        date: '04',
        month: 'Feb',
        day: '04 Feb 2024',
        title: 'The Impact of Packaging on Online Customer Experience',
        content: [
            'Packaging plays a crucial role in the online customer experience. It is often the first physical interaction that customers have with your brand, and it can greatly influence their perception of your business. In fact, studies have shown that packaging has a direct impact on customer satisfaction and loyalty.',
            'When it comes to businesses like e-commerce, packaging should be considered an important part of their overall strategy. The perfect packaging not only gives protection to the product during transportation, but it also enhances the unboxing experience for the customer. This is essential for small and medium-sized businesses operating in India’s competitive markets.'
        ],
        imageUrl: blog,
    },
    {
        date: '17',
        month: 'Mar',
        day: '17 Mar 2024',
        title: 'The Impact of Packaging on Online Customer Experience',
        content: [
            'Packaging plays a crucial role in the online customer experience. It is often the first physical interaction that customers have with your brand, and it can greatly influence their perception of your business. In fact, studies have shown that packaging has a direct impact on customer satisfaction and loyalty.',
            'When it comes to businesses like e-commerce, packaging should be considered an important part of their overall strategy. The perfect packaging not only gives protection to the product during transportation, but it also enhances the unboxing experience for the customer. This is essential for small and medium-sized businesses operating in India’s competitive markets.'
        ],
        imageUrl: blog,
    },
    
];

const recentPosts = [
    { title: 'Wrapping Tissue Paper', date: 'July 19, 2024' },
    { title: 'Paper Mailing Tube Also known As Shipping Tube', date: 'June 11, 2024' },
    { title: 'Shredded Tissue Paper and Shredded Crinkle Paper', date: 'June 1, 2024' },
    { title: 'Packaging Rules & Regulations', date: 'May 2, 2024' },
    { title: 'Guide for Assembling the Mailer Boxes', date: 'April 4, 2024' },
   
];

function UserBlog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='flex flex-col md:flex-row border-t-2 mt-5 md:px-5 lg:px-10 xl:px-14 py-20'>
            <div className='w-full md:w-3/4 '>
                {blogPosts.map((post, index) => (
                    <div key={index} className="p-4 md:border-b-2">
                        {/* Date Badge */}
                        <div className='flex items-center px-2 gap-3 border-b-2 md:border-b-0'>
                            <div className="flex-col items-center text-center p-2 rounded-md inline-block mb-4">
                                <p className="text-xl font-bold bg-gray-100 p-3 text-orange-500">{post.date}</p>
                                <p className="text-sm bg-orange-500 p-1 text-white">{post.month}</p>
                            </div>

                            {/* Blog Title */}
                            <div className='py-4 space-y-5 '>
                                <h1 className=" text-xl md:text-3xl font-bold mb-2">{post.title}</h1>
                            </div>

                        </div>

                        <div className='justify-end flex pl-10 pb-10'>
                            <p className="">{post.day}</p>
                        </div>

                        <div className="relative mb-4 md:block hidden ">
                            <img src={post.imageUrl} alt="Packaging" className="" />
                            <div className="absolute inset-0 flex justify-center items-center">
                                {/* Play button or other overlay elements can be added here */}
                            </div>
                        </div>

                        {/* Blog Content */}
                        {post.content.map((paragraph, idx) => (
                            <p key={idx} className="hidden md:block pt-5 text-gray-700 mb-4 ">{paragraph}</p>
                        ))}

                    </div>
                ))}
            </div>

            {/* Sidebar for Recent Posts */}
            <div className=" w-full md:w-1/3 p-4 bg-gray-100 sticky">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-2">
                    {recentPosts.map((post, index) => (
                        <li key={index}>
                            <a href="#" className="text-orange-500 hover:underline">{post.title}</a>
                            <p className="text-gray-500 text-sm">{post.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserBlog;
