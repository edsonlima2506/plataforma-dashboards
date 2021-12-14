import '../styles/principal.css';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export default function Principal() {
    return(
        <div className="principalPage">
            <Header />
            <SideMenu />
        </div>
    );
}