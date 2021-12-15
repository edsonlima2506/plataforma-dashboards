import '../styles/principal.css';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import PrincipalData from '../components/PrincipalData';

export default function Principal() {
    return(
        <div className="principalPage">
            <Header />
            <SideMenu />
            <PrincipalData />
        </div>
    );
}