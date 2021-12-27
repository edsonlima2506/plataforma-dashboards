import '../styles/listOfUsers.css';
import { users } from '../data/users';
import User from '../components/User';
import React from 'react';


export default function ListOfUsers() {
    return(
        <div className="listOfUsers">
          { users.map((user) => (
            <div key={ user.id }>
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