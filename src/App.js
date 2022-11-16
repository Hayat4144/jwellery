import React, { Suspense } from 'react';
import './index.css'
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Password_change from './settings/Password_change';
// import FeaturesProduct from './shop/FeaturesProduct';
import NotFound from './Component/NotFound';
import Home from './Component/Home'
import FetureSkeleton from './shop/FetureSkeleton';
import ProductPage from './shop/ProductPage';
import Category_Product from './shop/Category_Product';
import SearchProduct from './shop/SearchProduct';
const FeaturesProduct = React.lazy(() => import('./shop/FeaturesProduct'))

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        {/* <FetureSkeleton />  */}
        {/* <Suspense fallback={'loading....'}>
            <FeaturesProduct />
        </Suspense> */}
        <Routes>
          <Route path="/V2/auth/sign_up" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/V2/auth/sign_in" element={<Signin />} />
          <Route path='V2/settings/change/password' element={<Password_change />} />
          <Route path='V2/Shop/product/:product_id' element={<ProductPage />} />
          <Route path='V2/Shop/:category_name/products/' element={<Category_Product />} />
          <Route path='V2/Shop/q/:search' element={<SearchProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
