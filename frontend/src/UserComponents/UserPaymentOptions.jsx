import React, { useEffect } from 'react';
import payimg from '../assets/pay.webp';

function UserPaymentOptions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const paymentSections = [
        {
            title: "How can I pay for a U-Pack purchase?",
            content: [
                "U-Pack offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that U-Pack’s trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.",
                "You may use your Visa, MasterCard, Diners Club and American Express credit/debit cards in India. You can also use Internet Banking, Paytm, or PhonePe wallet to make your purchase."
            ]
        },
        {
            title: "Are there any hidden charges (Octroi, Transaction Fees, PG charges, etc) when I make a purchase on U-Pack?",
            content: [
                "The price you see on the product page is exclusive of GST which is calculated at the time of checkout. There are NO Octroi, transaction fees, merchant fees, etc charges when you make a purchase on U-Pack.",
                "Delivery charges may be extra depending on your location and order value. All orders over 1500 ship free to over 6000 PIN codes in India. Please see our Shipping Policy for further details."
            ]
        },
        {
            title: "How do I pay using a credit/debit card?",
            content: [
                "We accept payments made by credit/debit cards issued in India. We accept payments made using Visa, MasterCard, and American Express credit cards.",
                "To pay using your credit card at checkout, you will need your card number, expiry date, three-digit CVV number (found on the backside of your card). After entering these details, you will be redirected to the bank's page for entering the online 3D Secure password.",
                "Debit cards: We accept payments made using Visa, MasterCard and Maestro debit cards.",
                "To pay using your debit card at checkout, you will need your card number, expiry date (optional for Maestro cards), three-digit CVV number (optional for Maestro cards). You will then be redirected to your bank's secure page for entering your online password (issued by your bank) to complete the payment."
            ]
        },
        {
            title: "Is it safe to use my credit/debit card on U-Pack?",
            content: [
                "Your online transaction on U-Pack is secure with the highest levels of transaction security currently available on the Internet. U-Pack uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing.",
                "All credit card and debit card payments on U-Pack are processed through secure and trusted payment gateways managed by leading banks. Banks now use the 3D Secure password service for online transactions, providing an additional layer of security through identity verification."
            ]
        },
        {
            title: "What steps does U-Pack take to prevent card fraud?",
            content: [
                "U-Pack realizes the importance of a strong fraud detection and resolution capability. We and our online payments partners monitor transactions continuously for suspicious activity and flag potentially fraudulent transactions for manual verification by our team."
            ]
        },
        {
            title: "What is a 3D Secure password?",
            content: [
                "The 3D Secure password is implemented by VISA and MasterCard in partnership with the card-issuing banks under the 'Verified by VISA' and 'Mastercard SecureCode' services, respectively.",
                "The 3D Secure password adds an additional layer of security through identity verification for your online credit/debit card transactions. This password, which is created by you, is known only to you. This ensures that only you can use your card for online purchases."
            ]
        },
        {
            title: "How can I get the 3D Secure password for my credit/debit card?",
            content: [
                "You can register for the 3D Secure password for your credit/debit card by visiting your bank's website."
            ]
        },
        {
            title: "Can I use my bank's Internet Banking feature to make a payment?",
            content: [
                "Yes. U-Pack offers you the convenience of using your bank's Internet Banking service to make a payment towards your order. With this, you can directly transfer funds from your bank account, while conducting a highly secure transaction.",
                "We accept payment through Internet Banking for over 50 banks."
            ]
        },
        {
            title: "Can I make a credit/debit card or Internet Banking payment on U-Pack through my mobile?",
            content: [
                "Yes, you can make credit card payments through the U-Pack mobile site and application. U-Pack uses 256-bit encryption technology to protect your card information while securely transmitting it to the secure and trusted payment gateways managed by leading banks."
            ]
        }
    ];

    return (
        <div className='px-5 pb-16 pt-5 lg:px-16 xl:px-32 space-y-4'>
            <p className='text-2xl py-2'>
                <span className='font-bold'>U-Pack</span> Payments
            </p>

            <div className='flex items-center h-10 max-w-96'>
                <img src={payimg} alt="Payment Options" />
            </div>

            {/* Mapping through the sections */}
            {paymentSections.map((section, index) => (
                <div key={index} className='space-y-4'>
                    <p className='font-bold text-lg'>{section.title}</p>
                    {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default UserPaymentOptions;
