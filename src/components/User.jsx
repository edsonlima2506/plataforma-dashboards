import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
=======
>>>>>>> parent of 36f7288... Add Eslint

class User extends React.Component {
    render() {
        const { name, plan, date } = this.props;
        return(
            <div className='user'>
                <h1 className="userName userInfo">{ name }</h1>
                <h2 className="userPlan userInfo">{ plan }</h2>
                <h2 className="userDate userInfo">{ date }</h2>
                <button>Upgrade</button>
                <button>Detalhes</button>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default User;