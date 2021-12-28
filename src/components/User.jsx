import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class User extends React.Component {
    render() {
        const { name, plan, date, id } = this.props;
        return(
            <div className='user'>
                <h1 className="userName userInfo">{ name }</h1>
                <h2 className="userPlan userInfo">{ plan }</h2>
                <h2 className="userDate userInfo">{ date }</h2>
                <Link to={`/user/${id}`}><button className="userButton">Detalhes</button></Link>
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