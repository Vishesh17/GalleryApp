import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import 'tailwindcss/tailwind.css';
import { AuthProvider } from './context/auth';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes> 
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/signup' element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />
    </Routes>
    </AuthProvider>
  );
}

export default App;
