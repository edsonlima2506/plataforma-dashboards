import '../styles/users.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PrincipalAcess from '../components/PrincipalAcess';
import PrincipalSubs from '../components/PrincipalSubs';
import ListOfUsers from '../components/ListOfUsers';

export default function Users() {
    return(
    <div className="usersPage">
      <Header />
      <SideMenu />
      <div className="principalDataUsers">
        <PrincipalSubs />
        <PrincipalAcess />
        <ListOfUsers />
      </div>
    </div>
    );
}