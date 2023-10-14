import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';
import RatingDisplay from "./RatingDisplay";

const Products = ({ data, isLoading }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        const payload = {
            description: product.description,
            image: product.image_link,
            name: product.name,
            price: product.price,
        }
        dispatch(addToCart(payload));
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

    const handleProductClick = (product) => {
        navigate('/product', { state: { name: product.name, price: product.price, description: product.description, image: product.image_link } });
    };

    return (
        <>
            <div className="min-h-screen px-24">
                <div className="py-8 z-0">
                    <h1 className="text-center font-bold text-2xl">Latest Products</h1>
                </div>
                {isLoading && !data &&
                    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-200 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-32 pb-4">
                    {data?.slice(0, 21).map(product => (
                        <div className="w-full p-2 bg-white rounded-lg shadow-2xl hover:border-amber-400 transition-transform hover:scale-105" key={product.id}>
                            <div className="img_container relative p-2 bg-bgGray rounded-lg">
                                <div className="absolute top-2 right-2 flex flex-col">
                                    <span className="bg-orange-600 text-white p-2 rounded-tl-lg">Top Sell</span>
                                    <AddShoppingCartIcon className="m-4 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-transform hover:scale-105" onClick={() => { handleAddToCart(product) }} />
                                </div>
                                <img src={product.image_link} alt="description" className="w-full h-64" />
                            </div>
                            <div className="">
                                <h5 className="text-xl font-semibold truncate">{product.name}</h5>
                                <h5 className="text-md">{product.brand}</h5>
                                <div className="flex justify-between">
                                    <h6 className="pt-4 font-bold text-lg">{product.price_sign !== null ? (product.price_sign) + product.price : '$' + product.price}</h6>
                                    <p className="pt-4">
                                        <RatingDisplay rating={product.rating} />
                                    </p>
                                </div>
                                <button className="w-full p-2 mt-4 text-2xl bg-orange-600 text-white rounded-md" onClick={() => {handleProductClick(product)}}>
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products;