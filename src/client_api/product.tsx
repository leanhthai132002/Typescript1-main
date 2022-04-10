import AppClone from '../App_clone';
import api from './instance';

export const getProducts = () => {
    return api.get('/products');
};

export const getProduct = (_id:string|undefined) => {
    return api.get(`/product/${_id}`);
};

export const createProduct = (data :any) =>{
    return api.post('/product',data);
};

export const deleteProduct = (_id: number|string) => {
    return api.delete(`/product/${_id}`);
};

export const updateProduct = (_id:string|undefined, data :any) => {
    return api.put(`/product/${_id}`, data);
};