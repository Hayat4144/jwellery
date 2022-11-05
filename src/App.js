
import './index.css'
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Navbar from "./MainComponent/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/V2/auth/sign_up" element={<Signup />} />
          <Route path="/V2/auth/sign_in" element={<Signin />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
