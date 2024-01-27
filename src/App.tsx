import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
