import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login"; 
import Register from './components/register/Register';

function App() {
  return (
    <AuthProvider>
        <div id="box"> 
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>

            <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;