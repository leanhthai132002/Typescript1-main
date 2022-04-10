import React, { useEffect, useState} from "react";
import { getProducts, deleteProduct } from "../../client_api/product";
import {Link} from 'react-router-dom';

export type PRODUCT = {
    _id: number,
    name: string,
    desc: string,
    price: number,
    category: string,
    image: string,
    status: number
};

export default function ProductList(){
    const [products, setProducts] = useState<PRODUCT[]>([]);

    const handleGetProducts = async () => {
        const respose =await getProducts();
        setProducts(respose.data);
    };

    const ondelete = async (_id: number) => {
        const response = await deleteProduct(_id);
        if (response.status === 200) {
            handleGetProducts();
        }
    }

    useEffect(()=>{
        handleGetProducts();
    }, []);

    return(
        <div style={{marginLeft: '200px'}}>
    
            <h2 style={{fontSize: '20px' , textAlign: 'center', marginBottom: '50px'}}>
                QUẢN LÝ SẢN PHẨM
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.desc}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>

                                <td>{product.image
                                    ? <img src={product.image} width={100} alt="" />
                                    : null}
                                    </td>
                                
                                <td>
                                    <Link  className="btn btn-info" to={`/admin/product/${product._id}`}>
                                        <p>Detail</p>
                                        
                                    </Link>
                                </td>
                                <td>
                                    <Link className="btn btn-warning" to={`/admin/product/edit/${product._id}`}>
                                        <p>Edit</p>

                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => ondelete(product._id as number)}>
                                        <p>Xoá</p>

                                    </button>

                                </td>
                                <td>{product.status ? 'Ẩn' : 'Hiển thị'}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Link style={{margin: '10px 0px'}} className='btn btn-success' to={'/admin/product/create'}>
                Thêm Sản Phẩm
            </Link>
    </div>
    )
};