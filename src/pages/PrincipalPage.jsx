import '../styles/principal.css';
import React from 'react'
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PrincipalData from '../components/PrincipalData';
import AcessGraphic from '../components/AcessGraphic';
import SubsGraphic from '../components/SubsGraphic';

export default function Principal() {
    return(
        <div className="principalPage">
            <Header />
            <PrincipalData />
            <SubsGraphic />
            <AcessGraphic />
            <SideMenu />
        </div>
    );
}