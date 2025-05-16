import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;