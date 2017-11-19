import React from "react";
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import { Switch } from 'react-router'
import LiveRecivedData from '../../components/liveRecivedData'
import ListOfMeasurements from '../../components/listOfMeasurements'
import MainView from '../../components/mainView'
import Measurement from '../../components/measurement'
import Login from '../../components/login'
import Logout from '../../components/logout'
import Layout from '../../components/layout'
import GetApiToken from '../../components/getApiToken'
import Main from '../../components/main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


export const Routes = props =>

{  

  
  return(<MuiThemeProvider>
  <Router history={browserHistory}>

  <Switch>

    <Layout exact path="/" component={Main} />
    <Layout path="/listOfMeasurements" component={ListOfMeasurements}/>
    <Layout path="/measurement/:id/:kind/MainView" component={MainView}/>
    <Layout path="/recived/:id" component={LiveRecivedData}/>
    <Layout path="/measurement/:id" component={Measurement}/>
    <Layout path="/gettoken" component={GetApiToken}/>
    
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
  </Switch>

  </Router>
  </MuiThemeProvider>)}
