import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../client_api/product';
import { PRODUCT } from './ProductList'
function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState<PRODUCT>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    }, []);

    return (
        <div style={{ marginLeft: '250px' }}>
            <p>ID: {product?._id}</p>
            <p>Tên: {product?.name}</p>
            <p>Mô tả: {product?.desc}</p>
            <p>Giá: {product?.price}</p>
            <p>Danh mục: {product?.category}</p>
            <p>Ảnh: {product?.image
                ? <img src={product?.image} width={100} alt="" />
                : null}
            </p>
            <p>Trạng thái: {product?.status ? 'Ẩn' : 'Hiển thị'}</p>
        </div>
    );
}

export default ProductDetail;