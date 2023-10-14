import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppHeader from './Layout/AppHeader';
import AppFooter from './Layout/AppFooter';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { removeFromCart } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
        toast.success('Removed from your Cart!', {
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

    const buyProduct = (product) => {
        navigate('/product', { state: { name: product.name, price: product.price, description: product.description, count: 4, image: product.image_link } });
    };

    return (
        <>
            <AppHeader />
            <div className='min-h-screen px-24 py-12'>
                <div class="grid grid-cols-1 divide-y">
                    <div>
                        <h2 className='font-bold text-lg pb-4'>Shopping Cart</h2>
                    </div>
                    {cartItems.length !== 0 ? (cartItems.map((item, index) => (
                        <div key={index} className='flex'>
                            <div className='p-4 w-72'>
                                <img src={item.image} alt='product' />
                            </div>
                            <div className='p-4'>
                                <p className='font-bold text-lg'>{item.name}</p>
                                <p>{item.description}</p>
                                <p className='font-bold pt-4'>$ {item.price} /-</p>
                                <div className='flex justify-start space-x-4 pt-8'>
                                    <button onClick={() => { handleRemoveFromCart(item.name) }} className='py-2'>
                                        <RemoveShoppingCartIcon className='text-orange-600' />
                                    </button>
                                    <button className='w-48 h-10 bg-orange-600 text-white rounded-full' onClick={() => { buyProduct(item) }}>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    ))) : (
                        <div className='text-center text-2xl py-52'>Your Cart is Empty !</div>
                    )}
                </div>
            </div>
            <AppFooter />
        </>
    );
};

export default Cart;
