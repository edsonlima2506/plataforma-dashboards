import '../styles/header.css';
import towerLogo from '../images/towerLogo.png';
import notification from '../images/notification.png';
import calendar from '../images/calendar.png';
import email from '../images/email.png'
import profile from '../images/profile.png';

export default function Header() {
    return(
        <header className="superiorBar" data-testid="header">
            <img src={ towerLogo } alt="Logo da Tower" className="towerLogo"/>
            <div className="headerImages">
                <img src={ notification } alt="notification" className="headerIcon" />
                <img src={ calendar } alt="calendar" className="headerIcon" />
                <img src={ email } alt="email" className="headerIcon" />
                <img src={ profile } alt="profilePicture" className="profilePicture" />
            </div>
        </header>
    );
}