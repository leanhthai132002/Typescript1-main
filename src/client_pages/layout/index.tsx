import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function ClientLayout () {
    return (
        <div>
            {<Header/>}

            <main>
                {/* CONTENT */}
                {/* Đây là phần thay đổi */}
                {/* Component render từ prop element của <Route /> */}
             
                <Outlet />
            </main>
            {<Footer/>}
        </div>
    )
};

export default ClientLayout;