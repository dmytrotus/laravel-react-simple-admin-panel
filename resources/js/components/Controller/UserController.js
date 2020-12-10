import React from 'react';
import ReactDOM from 'react-dom';
import UserView from '../View/UserView';

function UserController() {
    
    return (
            <UserView />
    );
}


if (document.getElementById('user-component')) {
    ReactDOM.render(<UserController />, document.getElementById('user-component'));
}
