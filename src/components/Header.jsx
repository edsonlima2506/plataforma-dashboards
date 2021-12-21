import '../styles/header.css';
import { Link } from 'react-router-dom';
import towerLogo from '../images/logos/towerLogo.png';
import notification from '../images/icons/notification.png';
import calendar from '../images/icons/calendar.png';
import email from '../images/icons/email.png'
import profile from '../images/icons/profile.png';
import React from 'react';

export default function Header() {
    return(
        <header className="superiorBar" data-testid="header">
            <img src={ towerLogo } alt="Logo da Tower" className="towerLogo"/>
            <div className="headerImages">
                <img src={ notification } alt="notification" className="headerIcon" />
                <img src={ calendar } alt="calendar" className="headerIcon" />
                <img src={ email } alt="email" className="headerIcon" />
                <Link to="/profile">
                    <img src={ profile } alt="profilePicture" className="profilePicture" />
                </Link>
            </div>
        </header>
    );
}