import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import Details from "./components/catalog/Details";
import Create from "./components/create/Create";
import Edit from "./components/edit/Edit";
import Logout from "./components/logout/Logout";

import AuthGuard from './components/common/AuthGuard';
import GuestGuard from './components/common/GuestGuard';
import Profile from "./components/profile/Profile";

function App() {
  return (
    <AuthProvider>
        <div id="box">
        <Header />

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:petId" element={<Details />} />

                <Route element={<GuestGuard />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<AuthGuard />}>
                    <Route path="/create" element={<Create />} />
                    <Route path="/catalog/:petId/edit" element={<Edit />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </main>

        <Footer />
        </div>
    </AuthProvider>
  );
}

export default App;