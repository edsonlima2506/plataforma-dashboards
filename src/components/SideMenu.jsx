import '../styles/sideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartBar, faUser, faAddressBook, faWallet, faBullhorn, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function SideMenu() {
    return(
        <aside className="sideMenu">
            <nav>
                <ul className="sideList">
                    <li
                        className="sideItem">
                            <FontAwesomeIcon 
                                icon={ faChartBar }
                                className="itemIcon"
                            />
                            Inicio
                    </li>
                    <li
                        className="sideItem">
                            <FontAwesomeIcon
                                icon={ faUser }
                                className="itemIcon"
                            />
                            Usuários
                    </li>
                    <li
                        className="sideItem">
                            <FontAwesomeIcon
                                icon={ faAddressBook }
                                className="itemIcon"
                            />
                            Lojas
                    </li>
                    <li
                        className="sideItem">
                            <FontAwesomeIcon
                                icon={ faWallet }
                                className="itemIcon"
                            />
                            Carteira
                    </li>
                    <li
                        className="sideItem">
                            <FontAwesomeIcon
                                icon={ faBullhorn }
                                className="itemIcon"
                            />
                            Marketing
                    </li>
                    <li
                        className="sideItem">
                            <FontAwesomeIcon
                                icon={ faBookmark }
                                className="itemIcon"
                            />
                            Metas
                    </li>
                </ul>
            </nav>
        </aside>
    );
}