import React from 'react'
import UserFooter from '../UserComponents/UserFooter' 
import UserNavbar from '../UserComponents/Navbar'
import UserPackPoints from '../UserComponents/UserPackPoints'

function UserPackPointsPage() {
  return (
    <>
      <UserNavbar/>
      <UserPackPoints/>
      <UserFooter/>
    </>
  )
}

export default UserPackPointsPage
