import '../styles/principal.css';
import React from 'react'
import SideMenu from '../components/SideMenu';
import PrincipalData from '../components/PrincipalData';
import Header from '../components/Header';
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