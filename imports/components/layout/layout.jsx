import React from 'react'
import SideBar from '../sideBar'
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom'

const Layout = ({component: Component, ...rest}) => {

  {console.log(rest.location)}
    return (
      <Route {...rest} render={matchProps => (
        Meteor.userId() ? (<div>
            <SideBar />
            <Component {...matchProps} />
        </div>) :
        (
          <Redirect to={{
            pathname: '/login',
            state: { from: matchProps.location }
          }}/>
        )
      )} />
    )
  };

  export default Layout 