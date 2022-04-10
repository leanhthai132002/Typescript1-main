import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

function AdminLayout () {
    return (
        <div>   
            {<Header/>}
            <main>{<Navbar/>}
                    
                <Outlet />
            </main>
            
        </div>
    )
};

export default AdminLayout;