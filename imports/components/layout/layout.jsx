import React from 'react'
import SideBar from '../sideBar'
import CircularProgress from 'material-ui/CircularProgress';
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom'

const Layout = ({component: Component, ...rest}) => {
    if(rest.userId !== undefined)
    {return (
      <Route {...rest} render={matchProps => (
        rest.userId ? (<div>
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
    )}
    else{
       
       return(<div id="center"> <CircularProgress size={80} thickness={7} /> </div>)
    }
  };

  export default Layout 