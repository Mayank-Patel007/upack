import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Array of FAQ data
const faqData = [
    {
        question: "How long will it take to receive my order?",
        answers: [
            "95% of our orders are handed over to our logistics partners the next working day of your order.",
            "For custom printed orders, take an additional 3 to 5 days.",
            "95% of our orders are delivered within 2 to 3 days after shipment via Blue Dart, Delhivery, India Post.",
            "Remote locations and ones affected by lockdown may take longer."
        ]
    },
    {
        question: "What is your price for a bulk quantity order?",
        answers: [
            "Please e-mail your request to sales@upack.in and we will be happy to provide a bulk quotation."
        ]
    },
    {
        question: "Can you sell to individual customers or just to companies?",
        answers: [
            "Although most of our sales are business to business, we can sell to any type of customer."
        ]
    },
    {
        question: "What other payment options?",
        answers: [
            "You may use all major credit cards, net banking, UPI, etc.",
            "U-Pack’s payment gateway partners are PCI/DSS certified to keep your transaction details confidential at all times."
        ]
    },
    {
        question: "Do I have to place my order online?",
        answers: [
            "If you would prefer, we would be happy to take your order by phone (022) 4896 4040, or by e-mail at sales@upack.in.",
            "However, you will receive your order fastest if you place it online.",
            "Online orders are immediately sent to the warehouse to be picked and shipped."
        ]
    },
    {
        question: "Can I request a copy of my invoice or receipt?",
        answers: [
            "We send your invoice along with the shipment.",
            "If you need another copy, simply e-mail us at sales@upack.in and we will e-mail you a copy."
        ]
    },
    {
        question: "Is your website secure?",
        answers: [
            "Yes, The security of our website and the protection of your personal information is extremely important for us.",
            "You can see a copy of our SSL Encryption Certificate simply by clicking on the padlock on the right side of your browser.",
            "We have partnered with external security providers to manually audit our data for breaches."
        ]
    },
    {
        question: "How do I know I can trust ordering from you?",
        answers: [
            "U-Pack is a GST registered company in Mumbai, doing business since 2018 with several thousand happy customers.",
            "Take a look at our real customer reviews."
        ]
    },
    {
        question: "I have a coupon. How do I redeem it?",
        answers: [
            "If you have a coupon that you would like to redeem, there is a place for you to enter the coupon code in the checkout form."
        ]
    },
    {
        question: "How much do you charge for shipping?",
        answers: [
            "Orders above ₹ 1500 will be shipped free of cost.",
            "For orders below ₹ 1500, a nominal fee of ₹ 149 would be applied.",
            "See our shipping policy page for full details."
        ]
    },
    {
        question: "Do you ship outside India?",
        answers: [
            "At the present time, we do not ship outside India. U-Pack has partnered with Ucanpack for supplies to the United States & Canada."
        ]
    },
    {
        question: "Can I stop by and pick up products at one of your local distribution centers?",
        answers: [
            "In order to keep our prices low, our distribution centers are not staffed for direct customer pick-up."
        ]
    },
    {
        question: "Is it possible to get samples?",
        answers: [
            "We are happy to provide samples whenever possible.",
            "Please e-mail us at support@upack.in and we will check to see if we have sample stock available."
        ]
    }
];

function UserFaqs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3006/api/faq/getActiveFAQs`, { withCredentials: true });
            if (response.data && response.data.data) {
                setFaqs(response.data.data);
            } else {
                setFaqs([]);
            }
        } catch (error) {
            console.error(error);
            setFaqs([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='px-5 py-16 lg:px-16 xl:px-32 bg-stone-50'>
            <p className='text-4xl py-2'><span className='font-bold'>Frequently</span> Asked Questions</p>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='space-y-4'>
                    {faqs.length > 0 ? (
                        faqs.map((faq, index) => (
                            <div key={index}>
                                {/* Rendering the question safely using dangerouslySetInnerHTML */}
                                <p className='font-bold py-2 text-lg'
                                    dangerouslySetInnerHTML={{ __html: faq.question }} />


                                <ul className='px-5'>
                                    {faq.answer ? (
                                        <li className='list-disc'
                                            dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                    ) : (
                                        <p>No answers available for this question.</p>
                                    )}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No FAQs available.</p>
                    )}

                </div>
            )}
        </div>
    );
}

export default UserFaqs;
