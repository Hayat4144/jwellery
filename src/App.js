
import './index.css'
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Password_change from './settings/Password_change';
import FeaturesProduct from './shop/FeaturesProduct';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <FeaturesProduct />
        <Routes>
          <Route path="/V2/auth/sign_up" element={<Signup />} />
          <Route path="/V2/auth/sign_in" element={<Signin />} />
          <Route path='V2/settings/change/password' element={<Password_change />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
