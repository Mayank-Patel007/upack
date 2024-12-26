import React,{useEffect} from 'react'
import img1 from '../assets/Untitled-1.jpg'
import img2 from '../assets/Untitled-2.jpg'

function UserPackPoints() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className='bg-stone-50 p-10'>
      <div className='flex justify-center'>
        <p className='text-3xl font-bold'>U-Pack Loyalty Program</p>
      </div>

      <div className='flex flex-col lg:flex-row mt-10 gap-4 lg:px-6  xl:px-20 '>
        <div className='lg:w-1/2'>
          <div className='mb-6'>
            <p className='text-xl font-semibold'>Earn More as You Grow</p>
            <p className='text-gray-600 mt-2'>Join our loyalty program and turn every purchase into points that pave your way to amazing discounts and offers.</p>
          </div>

          <div>
            <p className='text-2xl font-semibold mt-10'>How to Earn PackPoints</p>
            <div className='mt-4'>
              <table className='table-auto w-full text-left'>
                <thead>
                  <tr>
                    <th className='font-semibold'>Action</th>
                    <th className='font-semibold'>PackPoints Earned</th>
                  </tr>
                </thead>
                <tbody className='text-gray-700'>
                  <tr className='border-b'>
                    <td className='py-2'>Every ₹100 Spent</td>
                    <td className='py-2'>
                      <div className='mt-1'>Beginner - 2 PackPoints</div>
                      <div className='mt-1'>Bronze - 3 PackPoints</div>
                      <div className='mt-1'>Silver - 4 PackPoints</div>
                      <div className='mt-1'>Gold - 5 PackPoints</div>
                    </td>
                  </tr>

                  <tr className='border-b'>
                    <td className='py-2'>Refer a Friend</td>
                    <td className='py-2'>Upto 150 PackPoints when they sign up</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='py-2'>Friend's First 3 Orders</td>
                    <td className='py-2'>Equal PackPoints</td>
                  </tr>
                  <tr>
                    <td className='py-2'>Sign Up Bonus</td>
                    <td className='py-2'>25 PackPoints</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
          <img src={img1} alt="Loyalty Program" className='max-w-full h-auto' />
        </div>
      </div>

      {/* New Section Below */}
      <div className='flex flex-col lg:flex-row mt-20 gap-4 lg:px-6 xl:px-20'>
        <div className='lg:w-1/2 flex justify-center'>
          <img src={img2} alt="Tier Progression" className='max-w-full h-auto' />
        </div>

        <div className='lg:w-1/2 mt-10 lg:mt-0'>
          <div className='text-left'>
            <p className='text-2xl font-semibold'>Tier Progression</p>
            <ul className='mt-4 text-gray-700 space-y-2'>
              <li><strong>Gold Tier:</strong> Spend ₹500,000+ and earn the most rewards.</li>
              <li><strong>Silver Tier:</strong> Spend ₹200,000 and watch your PackPoints grow faster.</li>
              <li><strong>Bronze Tier:</strong> Spend ₹50,000 and start earning more.</li>
            </ul>
            <p className='text-2xl font-semibold mt-6'>1 PackPoint = ₹1</p>
            <p className='text-gray-600 mt-2'>* PackPoints expire in 60 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPackPoints
