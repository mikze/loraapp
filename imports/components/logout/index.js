import Logout from './logout.jsx'
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

const composer = ({ router }, onData) => {

    const logout = () => Meteor.logout();
    
    onData(null, {
        logout
    });
};

export default composeWithTracker(composer)(Logout);