import React from 'react';
import AppHeader from './Layout/AppHeader';
import AppFooter from './Layout/AppFooter';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(location.state));
        toast.success('Added to your Cart!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    };

    return (
        <>
            <AppHeader />
            <div className='min-h-screen flex'>
                <div className='w-1/2'>
                    <img src={location.state.image} alt='product' className='w-3/4 px-32 py-12 m-12' />
                </div>
                <div class="grid grid-cols-1 divide-y w-1/2 pl-4 pr-32 py-24 space-y-2">
                    <div className='font-bold text-2xl'>{location.state.name}</div>
                    <div className='pt-8 text-2xl font-md'>$ {location.state.price} /-</div>
                    <div className='pt-4'>
                        <h6 className='font-bold'>About the Item</h6>
                        <p>{location.state.description}</p>
                    </div>
                    <div className='flex space-x-4 pt-8'>
                        <button className='w-full h-10 bg-orange-400 text-white rounded-full' onClick={handleAddToCart}>ADD TO CART</button>
                        <button className='w-full h-10 bg-orange-600 text-white rounded-full'>BUY NOW</button>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    )
};

export default ProductDetails;
