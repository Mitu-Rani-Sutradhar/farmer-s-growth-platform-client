import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Home from '../pages/Home';

const HomeLayout = () => {
    return (
        <div>

           <header>
            <Header></Header>
           </header>
           <main>
            <section>
                <Home></Home>
            </section>
             <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>

        </div>
    );
};

export default HomeLayout;