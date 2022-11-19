import React, { Fragment, Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Password_change from '../settings/Password_change'
import Cart from '../shop/Cart'
import FeaturesProduct from '../shop/FeaturesProduct'
import ChangeEmail from '../settings/User/ChangeEmail'
import ChangePassword from '../settings/User/ChangePassword'
import ShippingAddress from '../shop/ShippingAddress'

function Home() {
  return (
    <Fragment>
      <header className='headers'>
        <Navbar />
      </header>
      <main className='h-full w-full px-5'>
        <FeaturesProduct />
      </main>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default Home