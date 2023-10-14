import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { decrementProductCount } from '../redux/actions/cartActions';

const BuyNowModal = ({ isOpen, onClose, buyProduct }) => {
  const dispatch = useDispatch();
//   const productCount = useSelector((state) => {
//     const product = state.cart.cartItems.find((item) => item.name === buyProduct.name);
//     return product ? product.count : 0;
//   });

  const handleBuyClick = () => {
    // console.log("productCount", productCount);
    if (buyProduct && buyProduct.name) {
      if (buyProduct) {
        dispatch(decrementProductCount(buyProduct.name));
        toast.success('Booking successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      } else {
        toast.error('Product is out of stock.', { 
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      onClose();
    } else {
      console.error("Invalid buyProduct data");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-content bg-white w-1/4 p-4 rounded shadow-lg text-center relative flex flex-col">
        <div className='w-8 h-8 rounded-full text-center bg-orange-600 absolute top-2 right-2'>
          <button
            onClick={onClose}
            className="text-white font-bold w-full h-full flex items-center justify-center focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>
        <h3 className='font-bold text-2xl pb-2'>{buyProduct.name}</h3>
        <p>Price: ${buyProduct.price}/-</p>
        <p>Available: {buyProduct.count}</p>
        <p>Availability of the product is not guaranteed !</p>
        <p>Proceed for payment</p>
        <button
          onClick={() => {
            onClose();
            handleBuyClick();
          }}
          className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 my-4 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  ) : null;

};

export default BuyNowModal;
