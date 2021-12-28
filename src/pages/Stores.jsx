import React from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import StoresGraphic from '../components/StoresGraphic';

export default function Stores() {
    return(
        <div className="principalPage">
            <Header />
            <SideMenu />
            <StoresGraphic />
        </div>
    );
}