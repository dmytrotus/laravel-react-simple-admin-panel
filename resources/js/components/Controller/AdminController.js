import React from 'react';
import ReactDOM from 'react-dom';
import AdminView from '../View/AdminView';

function AdminController() {
    
    return (
            <AdminView />
    );
}


if (document.getElementById('admin-component')) {
    ReactDOM.render(<AdminController />, document.getElementById('admin-component'));
}
