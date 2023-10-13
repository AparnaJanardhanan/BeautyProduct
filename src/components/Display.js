import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Products from './Products';
import { useProductData } from '../hook/useProductData';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const { isLoading, data } = useProductData();
    const navigate = useNavigate();

    const shopNow = () => {
        navigate('/shopbytype');
    };

    return (
        <>
            <div
                className="min-h-screen flex bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/564x/35/97/56/3597567c257a2abfeb3ef8fa295c9222.jpg)', width: '100%', height: '600px'
                }}
            >
                <div className="w-1/2 py-32 pl-72 space-y-4">
                    <span className="text-orange-500 font-bold">THE ROYAL ELEGANCE</span>
                    <div className="font-bold text-6xl border-l-8 border-black rounded-md px-2">Revitalizing Your <span className="text-orange-600 font-bold">Beauty </span>for</div>
                    <div className="font-bold text-6xl border-l-8 border-orange-600 rounded-md px-2">Years !</div>
                    <p>Why hide your beauty when you can enhance it? Beauty gives you the confidence you deserve.</p>
                    <div className="flex justify-start space-x-6">
                        <button className="w-28 p-2 bg-orange-600 text-white rounded-md" onClick={shopNow}>SHOP NOW</button>
                        <div>
                            <button className="p-2 rounded-full border border-orange-500">
                                <a href='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/oldbw21a4gohw58p5qzr'><PlayArrowIcon className="text-orange-500" /></a>
                            </button>
                            <span className="px-2">Product Video</span>
                        </div>
                    </div>
                </div>
            </div>
            {<Products data={data?.data} isLoading={isLoading} />}
        </>
    )
}

export default Display;
