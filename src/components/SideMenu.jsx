import '../styles/sideMenu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartBar, faUser, faAddressBook, faWallet, faBullhorn, faBookmark } from '@fortawesome/free-solid-svg-icons';
const listItems = [
    {
        itemIcon: faChartBar,
        itemPath: '/principal',
        itemText: 'Início',
    },
    {
        itemIcon: faUser,
        itemPath: '/users',
        itemText: 'Usuários',
    },
    {
        itemIcon: faAddressBook,
        itemPath: '/stores',
        itemText: 'Lojas',
    },
    {
        itemIcon: faWallet,
        itemPath: '/wallet',
        itemText: 'Carteira',
    },
    {
        itemIcon: faBullhorn,
        itemPath: '/marketing',
        itemText: 'Marketing',
    },
    {
        itemIcon: faBookmark,
        itemPath: '/goals',
        itemText: 'Metas',
    },
]

export default function SideMenu() {
    return(
        <aside className="sideMenu" data-testid="sideMenu">
            <nav>
                <ul className="sideList" data-testid="sideList">
                    { listItems.map((item) => (
                        <li data-testid="sideItem" className="sideItem" key={ item.itemText }>
                            <Link to={ item.itemPath } className="link">
                                <FontAwesomeIcon  icon={ item.itemIcon } className="itemIcon" />
                                { item.itemText }
                            </Link>
                        </li>
                    )) }
                </ul>
            </nav>
        </aside>
    );
}