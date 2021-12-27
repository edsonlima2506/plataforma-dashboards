import '../styles/users.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import AcessGraphic from '../components/AcessGraphic';
import SubsGraphic from '../components/SubsGraphic';
import ListOfUsers from '../components/ListOfUsers';
import React from 'react';

export default function Users() {
    return(
    <div className="usersPage">
      <Header />
      <SideMenu />
      <div className="principalDataUsers">
        <SubsGraphic />
        <AcessGraphic />
        <ListOfUsers />
      </div>
    </div>
    );
}