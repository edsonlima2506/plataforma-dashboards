import '../styles/listOfUsers.css';
import { users } from '../data/users';
import User from '../components/User';

export default function ListOfUsers() {
    return(
        <div className="listOfUsers">
            { users.map((user) => (
                <div>
                    <User
                        name={ user.name }
                        plan={ user.plan }
                        date={ user.date }
                        id={ user.id }
                    />
                </div>
            )) }
        </div>
    );
}