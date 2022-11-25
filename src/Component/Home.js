import React, { Fragment, Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Password_change from '../settings/Password_change'
import Cart from '../shop/Cart'
import FeaturesProduct from '../shop/FeaturesProduct'
import ChangeEmail from '../settings/User/ChangeEmail'
import ChangePassword from '../settings/User/ChangePassword'
import ShippingAddress from '../shop/ShippingAddress'
import HomeSlider from './HomeSlider'
import Header_Category_list from './Header_Category_list'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title> Taj Jwellery | Home</title>
      </Helmet>
      <header className='headers'>
        <Navbar />
        <Header_Category_list />
      </header>
      <main className='h-full w-full'>
        <HomeSlider />
        <FeaturesProduct />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home