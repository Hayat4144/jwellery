import React, { Suspense } from 'react';
import './index.css'
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Component/NotFound';
import Home from './Component/Home'
import ProductPage from './shop/ProductPage';
import SearchProduct from './shop/SearchProduct';
import Cart from './shop/Cart';
import UserSettings from './settings/MainSettings/UserSettings.';

const FeaturesProduct = React.lazy(() => import('./shop/FeaturesProduct'))

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/V2/auth/sign_up" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/V2/auth/sign_in" element={<Signin />} />
          <Route path='V2/Shop/product/:product_id' element={<ProductPage />} />
          <Route path="/V2/Shop/Cart/" element={<Cart />} />
          {/* <Route path='V2/Shop/:category_name/products/' element={<Category_Product />} /> */}
          <Route path='V2/Shop/q/:search' element={<SearchProduct />} />
          <Route path='/V2/settings' element={<UserSettings />} />
          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
