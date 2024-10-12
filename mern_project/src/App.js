import Signup from './components/SignUpForm';
import Login from './components/LoginForm';
import Home from './components/Home';
import ImgSlider from './components/ImgSlider'; 
import Review from './components/Review';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/imgslider" element={<ImgSlider />} /> 
        <Route path="/review" element={<Review />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
