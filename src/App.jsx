import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login"; 
import Register from './components/register/Register';
import Catalog from "./components/catalog/Catalog";
import Details from "./components/catalog/Details";
import Create from "./components/create/Create";
import Logout from "./components/logout/Logout";

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
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:petId" element={<Details />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </main>

            <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;