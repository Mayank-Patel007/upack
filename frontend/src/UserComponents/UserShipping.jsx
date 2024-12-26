import React,{useEffect} from 'react'

function UserShipping() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='px-5 pb-16 pt-5 lg:px-16 xl:px-32 space-y-4'>
            <p className='text-2xl text-orange-500 py-2'><span className='font-bold'>SHIPPING</span> FAQS</p>

            <div className='space-y-4'>
                <p>Majority of our orders are handed over to our logistics partners within 1 working days of your order. For custom printed orders, once we receive your written approval of the artwork, it will take an additional 3 working days for printing. Orders above Rs.1500 will be shipped free of cost. For orders below Rs.1500, a nominal fee of Rs.149 would be applied.</p>
                <p>Once your order ships, a tracking number will be created. You can start tracking your order as soon as it has been shipped out. Alternatively, you can also login and visit the ‘My Account' section to know your order status. Please provide an accurate email address if you would like to track your order. Creating an account, though not required, will facilitate the ability to track the package.</p>
                <p>U-Pack currently ships to over 6000 PIN codes across India for qualified orders. Depending upon your Pin Code, the shipping transit time varies between 3 to 9 working days. On each product page, you can enter your location's pin code and check when you can expect to receive the delivery. Sometimes, delivery time is subject to factors beyond our control, including but not limited to, unexpected travel delays from our courier partners due to weather conditions or any political disruptions or festivals or strikes. In such cases, U-Pack will not be held responsible. The delivery address cannot be changed once the order has been placed. </p>
            </div>

            <div>
                <p className='font-bold py-2 text-lg'>Remote Location Delivery:</p>
                <p>A surcharge is applied per shipment when the delivery destination location is remote (ODA). ODA is defined as PIN codes or a suburb/town that are distant, hard to access or infrequently served by major carriers. The delivery times for these ODA locations are significantly longer and additional charges are applicable per shipment. You will be explicitly advised about these charges and delivery estimate at the time of checkout if your delivery location falls in this category.</p>
            </div>

            <div>
                <p className='font-bold py-2 text-lg'>International Delivery:</p>
                <p>Right now, we do not deliver internationally. You can make a purchase from anywhere in the world using Indian currency as the mode of payment as long as the shipping address is within India.</p>
            </div>

            <div>
                <p className='font-bold py-2 text-lg'>GST Invoice</p>
                <p>We ship all packages with an invoice that can be found along with the product. If after receiving the package, you need another invoice, please email us and we will send out a soft copy.</p>
            </div>

            <div>
                <p className='font-bold py-2 text-lg'>U-PACK IS COMMITTED TO DELIVERING YOUR ORDER ACCURATELY, IN GOOD CONDITION, AND ON TIME.</p>
                <ul className='list-disc px-7 space-y-2'>
                    <li>We currently deliver free to more than 6000 PIN codes across India</li>
                    <li>As mentioned above, we ship most items within 3 working days of the order (except custom printed orders). However, in some cases, it may take us longer, up to 3 working days, to ship the order as we may have to manufacture or procure some of the items from our other warehouses. In the unlikely event that we are unable to ship your order within 10 working days, we will cancel the remaining unshipped part of the order, and send you an email informing you about the same. In such a case, your payment against the unshipped part of the order will be refunded, in the manner, you have made the payment.</li>
                    <li>We ship on all weekdays (Monday to Saturday), excluding public & state holidays.</li>
                    <li>If your order has multiple items, these may ship separately from different locations in separate shipments. You will receive a separate email if the shipment does not contain all the items that you had ordered.</li>
                    <li>If you believe that the product is not in good condition, or if the packaging is tampered with or damaged, before accepting delivery of the goods, please refuse to take delivery of the package, and call our Customer Care or email us at sales@upack.in, mentioning your order number. We shall make our best efforts to ensure that a replacement delivery is made to you at the earliest.</li>
                    <li>Please note all items will be shipped with an invoice mentioning the price, as per Indian Tax laws.</li>
                </ul>
            </div>
            
            <div className='pt-10'>
                <p>Last Updated: 27/07/2023</p>
            </div>
        </div>
    )
}

export default UserShipping
