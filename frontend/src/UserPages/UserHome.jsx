import React from 'react'
import Navbar from "../UserComponents/Navbar";
import Carousol from '../UserComponents/Carousol'
import UserCategory from '../UserComponents/UserCategory';
import UserShop from '../UserComponents/UserShop'
import UserPackingMaterial from '../UserComponents/UserPackingMaterial';
import ReviewsAndFAQ from '../UserComponents/ReviewsAndFAQ';
import UserFooter from '../UserComponents/UserFooter';
function UserHome() {
  return (
    <>

    <Navbar/>
    <Carousol/>
    <UserCategory/>
    <UserShop/>
    <UserPackingMaterial/>
    <ReviewsAndFAQ/>
    <UserFooter/>

      
    </>
  )
}

export default UserHome
