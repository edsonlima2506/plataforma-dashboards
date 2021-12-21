import React from 'react';

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

export default User;