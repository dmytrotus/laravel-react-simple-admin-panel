import React, { useState, useEffect } from 'react';
import UserProjectsView from '../View/UserProjectsView';
import { Project } from '../Models/ProjectModel';
import { store } from '@/redux/ReduxStore';

function UserProjectsController() {

    return (
            <UserProjectsView />
    );
}


export default UserProjectsController;