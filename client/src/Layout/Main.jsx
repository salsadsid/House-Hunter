import React from 'react';
import Nav from '../Pages/Shared/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <Nav></Nav>
            <Outlet/>
          
        </main>
    );
};

export default Main;