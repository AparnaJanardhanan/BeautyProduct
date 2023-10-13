import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = () => axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");

export const useProductData = () => {
    return useQuery(['products'], fetchProducts);
}