import '../styles/principal.css';
import React from 'react'
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PrincipalData from '../components/PrincipalData';
import PrincipalAcess from '../components/PrincipalAcess';
import PrincipalSubs from '../components/PrincipalSubs';

export default function Principal() {
    return(
        <div className="principalPage">
            <Header />
            <PrincipalData />
            <PrincipalSubs />
            <PrincipalAcess />
            <SideMenu />
        </div>
    );
}