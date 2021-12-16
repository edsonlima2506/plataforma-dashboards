import '../styles/principal.css';
import React, { Suspense } from 'react'
import SideMenu from '../components/SideMenu';
const Header = React.lazy(() => import('../components/Header'));
const PrincipalData = React.lazy(() => import('../components/PrincipalData'));
const PrincipalAcess = React.lazy(() => import('../components/PrincipalAcess'));
const PrincipalSubs = React.lazy(() => import('../components/PrincipalSubs'));

export default function Principal() {
    return(
        <div className="principalPage">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <PrincipalData />
                <PrincipalSubs />
                <PrincipalAcess />
            </Suspense>
            <SideMenu />
        </div>
    );
}