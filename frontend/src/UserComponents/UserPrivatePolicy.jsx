import React,{useEffect} from 'react';
import profile1 from '../assets/profile1.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile3.jpeg'
function UserPrivatePolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const sections = [
        {
            title: 'Collection of Information',
            content: [
                'If you browse through this site without providing us with any personal information, we will gather and store some information about your visit, such as IP address, type of browser and operating system used, date and time you access our site, pages you visit, and if you linked to our website from another website, the address of that website. This information will not identify you personally and will not be linked back to you.',
                'There will be times, such as when you fill out our contact form, when we will need to obtain personally identifiable information from you or about you. Such personally identifiable information may include your name, address, e-mail address, telephone number and identification number.',
            ],
        },
        {
            title: 'Use and Sharing of Information',
            content: [
                'At no time will we sell your personally-identifiable data without your permission unless set forth in this Privacy Policy. The information we receive about you or from you may be used by us or shared by us with our corporate affiliates, dealers, agents, vendors and other third parties to help process your request; to comply with any law, regulation, audit or court order; to help improve our website or the products or services we offer; for research; to better understand our customers\' needs; to develop new offerings; and to alert you to new products and services (of us or our business associates) in which you may be interested. We may also combine information you provide us with information about you that is available to us internally or from other sources in order to better serve you.',
                'We do not share, sell, trade or rent your personal information to third parties for unknown reasons.',
            ],
        },
        {
            title: 'Cookies',
            content: [
                'From time to time, we may place "cookies" on your personal computer. "Cookies" are small identifiers sent from a web server and stored on your computer\'s hard drive, that help us to recognize you if you visit our website again. Also, our site uses cookies to track how you found our site. To protect your privacy we do not use cookies to store or transmit any personal information about you on the Internet. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies certain features of the site may not function property or at all as a result.',
            ],
        },
        {
            title: 'Links',
            content: [
                'Our website contains links to other sites. Such other sites may use information about your visit to this website. Our Privacy Policy does not apply to practices of such sites that we do not own or control or to people we do not employ. Therefore, we are not responsible for the privacy practices or the accuracy or the integrity of the content included on such other sites. We encourage you to read the individual privacy statements of such websites.',
            ],
        },
        {
            title: 'Security',
            content: [
                'We safeguard your privacy using known security standards and procedures and comply with applicable privacy laws. Our websites combine industry-approved physical, electronic and procedural safeguards to ensure that your information is well protected though it\'s life cycle in our infrastructure.',
                'Sensitive data is hashed or encrypted when it is stored in our infrastructure. Sensitive data is decrypted, processed and immediately re-encrypted or discarded when no longer necessary. We host web services in audited data centers, with restricted access to the data processing servers. Controlled access, recorded and live-monitored video feeds, 24/7 staffed security and biometrics provided in such data centers ensure that we provide secure hosting.',
            ],
        },
        {
            title: 'Opt-Out Policy',
            content: [
                'Please email sales@upack.in if you no longer wish to receive any information from us.',
                'Changes to this Privacy Policy',
                'Our privacy policy was last updated on August 22, 2016. We may change our Privacy Policy from time to time. If we do, we will update this Privacy Policy on our website.',
                'Questions?',
                'If you have any questions about our Privacy Policy, please e-mail your questions to us at sales@upack.in',
            ],
        },
        {
            title: 'What we collect',
            content: [
                'We may collect the following information:',
                <ul className='list-disc px-7 space-y-2'>
                    <li>name</li>
                    <li>contact information including email address</li>
                    <li>demographic information such as postcode, preferences and interests</li>
                    <li>other information relevant to customer surveys and/or offers</li>
                </ul>,
                'For the exhaustive list of cookies we collect see the List of cookies we collect section.',
            ],
        },
        {
            title: 'What we do with the information we gather',
            content: [
                'We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:',
                <ul className='list-disc px-7 space-y-2'>
                    <li>Internal record keeping.</li>
                    <li>We may use the information to improve our products and services.</li>
                    <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                    <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
                    </li>
                </ul>
               
            ],
        },
        {
            title: 'Security',
            content: [
                'We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.'
            ],
        },
        {
            title: 'How we use cookies',
            content: [
                "Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question."
            ],
        },
        {
            title: 'Links to other websites',
            content: [
                "A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.",
                'We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.',
                'Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.'
            ],
        },
        {
            title: 'Controlling your personal information',
            content: [
                'You may choose to restrict the collection or use of your personal information in the following ways:',
                <ul className='list-disc px-7 space-y-2'>
                    <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                    <li>if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at sales@upack.in</li>
                </ul>,
                'We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.',
                'You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to .',
                'If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.'
            ],
        } ,
        {
            title: 'List of cookies we collect',
            content: [
                'The table below lists the cookies we collect and what information they store.',
            ],
            tableData: [
                { name: 'Cookie Name', description: 'Description of the cookie' },
                { name: 'CART', description: 'The association with your shopping cart.' },
                { name: 'CATEGORY_INFO', description: 'Stores the category info on the page, that allows to display pages more quickly.' },
                { name: 'COMPARE', description: 'The items that you have in the Compare Products list.' },
                { name: 'CURRENCY', description: 'Your preferred currency' },
                { name: 'CUSTOMER', description: 'An encrypted version of your customer id with the store.' },
                { name: 'CUSTOMER_AUTH', description: 'An indicator if you are currently logged into the store' },
                { name: 'CUSTOMER_INFO', description: 'An encrypted version of the customer group you belong to.' },
                { name: 'CUSTOMER_SEGMENT_IDS', description: 'Stores the Customer Segment ID' },
                { name: 'EXTERNAL_NO_CACHE', description: 'A flag, which indicates whether caching is disabled or not.' },
                { name: 'FRONTEND', description: 'You sesssion ID on the server.' },
                { name: 'GUEST-VIEW', description: 'Allows guests to edit their orders.' },
                { name: 'LAST_CATEGORY', description: '	The last category you visited' },
                { name: 'LAST_PRODUCT', description: 'The most recent product you have viewed.' },
                { name: 'NEWMESSAGE', description: '	Indicates whether a new message has been received.' },
                { name: 'NO_CACHE', description: '	Indicates whether it is allowed to use cache.' },
                { name: 'PERSISTENT_SHOPPING_CART', description: '	A link to information about your cart and viewing history if you have asked the site.' },
                { name: 'POLL', description: 'The ID of any polls you have recently voted in.' },
                { name: 'POLLN', description: '	Information on what polls you have voted on.' },
                { name: 'RECENTLYCOMPARED', description: '	The items that you have recently compared.' },
                { name: 'STF', description: 'Information on products you have emailed to friends.' },
                { name: 'STORE', description: 'The store view or language you have selected.' },
                { name: 'USER_ALLOWED_SAVE_COOKIE', description: 'Indicates whether a customer allowed to use cookies.' },
                { name: 'VIEWED_PRODUCT_IDS', description: 'The products that you have recently viewed.' },
                { name: 'WISHLIST', description: '	An encrypted list of products added to your Wishlist.' },
                { name: 'WISHLIST_CNT', description: 'The number of items in your Wishlist.' },

                // Add more rows as necessary (up to 25 rows)
            ],
        },
    ];

    const blogs = [
        {
            id: 1,
            title: "Understanding React Hooks",
            date: "August 15, 2024",
            description: "A deep dive into React hooks, exploring useState, useEffect, and custom hooks.",
            image: profile1
        },
        {
            id: 2,
            title: "Tailwind CSS: A Beginner's Guide",
            date: "August 10, 2024",
            description: "Learn how to quickly style your applications using Tailwind CSS, a utility-first framework.",
            image: profile2
        },
        {
            id: 3,
            title: "Building a Full-stack App with MERN",
            date: "August 5, 2024",
            description: "Step-by-step guide to building a full-stack application using MongoDB, Express, React, and Node.js.",
            image: profile3
        },
    ];

    return (
        
        <>
        <div className='px-5 pb-16 pt-5 lg:px-16 xl:px-32 space-y-4'>
            <p className='text-4xl py-2'>
                <span className='font-bold'>Privacy</span> Policy
            </p>
            <div className='space-y-4'>
                {sections.map((section, index) => (
                    <div key={index}>
                        <p className='font-bold py-2 text-lg'>{section.title}</p>
                        {section.content.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                        {section.tableData && (
                            <div className='overflow-x-auto pt-5'>
                                <table className='w-full'>
                                    <tbody>
                                        {section.tableData.map((row, i) => (
                                            <tr className='' key={i}>
                                                
                                                <td className='px-4 py-3 font-bold '>{row.name}</td>
                                                <td className='px-4 py-3'>{row.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
          <div className="bg-gray-100 py-10 px-5">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Blogs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs.map((blog) => (
                      <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                          <img 
                              src={blog.image} 
                              alt={blog.title} 
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                              <h3 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h3>
                              <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
                              <p className="text-gray-700">{blog.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
        </>
    );
}

export default UserPrivatePolicy;
