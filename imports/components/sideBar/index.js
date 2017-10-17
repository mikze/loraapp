import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import SideBar from './sideBar.jsx'

const composer = ({ router }, onData) => {

    const logout = Meteor.logout();
    
    onData(null, {
        logout
    });
};

export default composeWithTracker(composer)(SideBar);