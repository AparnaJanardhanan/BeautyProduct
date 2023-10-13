import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AppHeader = ({ searchTerm, setSearchTerm, onSearchResult }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const { isLoading, data, refetch } = useQuery(
        ['search'],
        async () => {
            const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchTerm}`);
            const data = await response.json();
            return data;
        },
        {
            enabled: false,
            onSuccess: (data) => {
                console.log('data in header', data);
                onSearchResult({
                    data: data,
                    isLoading: isLoading
                });
            },
        }
    );
    console.log("data", data && data);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCart = () => {
        navigate('/cart');
    };

    const handleLogout = () => {
        setIsOpen(false);
        // console.log('localstorage', localStorage.getItem('token'));
        // localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header>
            <div className="bg-stone-900 text-white pt-2 h-10">
                <div className='flex justify-around'>
                    <div className='flex'>
                        <div>
                            <PhoneIcon />
                            <span className='pl-2 text-xs'>+91 987654321</span>
                        </div>
                        <div className='pl-4'><EmailIcon /><span className='pl-2 text-xs'>shopnow@gmail.com</span></div>
                    </div>
                    <h1>FREE SHIPPING AUS WIDE FOR ORDERS OVER $60</h1>
                    <div className='space-x-2'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-around py-6 shadow-md'>
                <div className='font-bold text-xl'><a href="/home">SHOP<span className='font-bold text-xl text-orange-600'>NOW</span></a></div>
                <nav>
                    <ul className="flex space-x-4">
                        <li className={`pr-6 border-r-2 ${location.pathname === '/home' ? 'text-orange-600 font-bold' : ''}`}>
                            <a href="/home">HOME</a>
                        </li>
                        <li className={`pr-6 border-r-2 ${location.pathname === '/shopbytype' ? 'text-orange-600 font-bold' : ''}`}>
                            <a href="/shopbytype">MAKEUP</a>
                        </li>
                        <li className={`pr-6 border-r-2 ${location.pathname === '/shopbybrand' ? 'text-orange-600 font-bold' : ''}`}>
                            <a href="/shopbybrand">BRANDED</a>
                        </li>
                        <li className={`pr-6 border-r-2 ${location.pathname === '/about' ? 'text-orange-600 font-bold' : ''}`}>
                            <a href="/about">ABOUT US</a>
                        </li>
                        <li>
                            <div className="flex">
                                <div className='pl-2 border'>
                                    <SearchIcon />
                                    <input
                                        type="text"
                                        className='w-32'
                                        placeholder="Search by name..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button className="bg-orange-600 text-white w-20" onClick={refetch}>Search</button>
                            </div>
                        </li>
                        <li>
                            <button onClick={handleCart}>
                                <ShoppingCartIcon className='text-orange-600' />
                            </button></li>
                        <li>
                            <button onClick={toggleDropdown}>
                                <AccountCircleIcon className='text-orange-600' />
                            </button></li>
                        {isOpen && (
                            <div className="absolute right-32 border text-center mt-8 w-28 h-8 bg-white rounded-lg shadow-lg">
                                <ul className="py-1">
                                    <li>
                                        <button onClick={handleLogout} className="block text-gray-800 hover:bg-gray-200 w-full">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
