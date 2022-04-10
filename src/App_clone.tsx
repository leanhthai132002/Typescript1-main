import React from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from "./client_pages/Dashbord";
import ClientLayout from "./client_pages/layout";
import ProductList from "./admin_pages/product/ProductList";
import ProductForm from "./admin_pages/product/ProductForm";
import Product from "./client_pages/layout/detail";
import Post from "./client_pages/layout/post";
import Detail from "./client_pages/layout/detail";
import Contact from "./client_pages/layout/contact";
import Cart from "./client_pages/layout/cart";
import AdminLayout from "./admin_pages";
import ProductDetail from "./admin_pages/product/ProductDetail";
import Login from "./client_pages/user/login";
import Register from "./client_pages/user/register";
function AppClone(){
    
    return (
        <div>
            <Routes>
                {/* <Route path={'/'} element={<Dashboard />} />
                <Route path={'/products'} element={<ProductList/>}/>
                <Route path={'/products/:id'} element={<ProductDetail/>} /> */}
                {/* bọc các route con bên trong
                Route bên ngoài sẽ định nghĩa layout
                element con sẽ đưuọc render vào oulet */}
                <Route path={'/'} element={<ClientLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={'detail'}>
                        <Route index element={<Product />} />
                    </Route>
                    <Route path={'post'}>
                        <Route index element={<Post />} />
                    </Route>
                    <Route path={'contact'}>
                        <Route index element={<Contact />} />
                    </Route>
                    <Route path={'cart'}>
                        <Route index element={<Cart />} />
                    </Route>
                    <Route path={'product/:id'}>
                        <Route index element={<Detail />} />
                    </Route>
                </Route> 

                <Route path={'/login'} element={<Login />}>
                </Route> 
                <Route path={'/register'} element={<Register />}>
                </Route>


                <Route path="admin" element={<AdminLayout/>}>
                    <Route index element={<ProductList/>} />
                    <Route path={'product'}>
                        <Route index element={<ProductList />} />
                        <Route path="create" element={<ProductForm/>}/>
                        <Route path="edit/:id" element={<ProductForm/>} />
                        <Route path=":id" element={<ProductDetail/>} />
                    </Route>
                </Route>

                
                
            </Routes>
        </div>
    );
}
export default AppClone;