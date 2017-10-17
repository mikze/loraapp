import React from "react";
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import { Switch } from 'react-router'
import LiveRecivedData from '../../components/liveRecivedData'
import Measurement from '../../components/measurement'
import Login from '../../components/login'
import Layout from '../../components/layout'
import GetApiToken from '../../components/getApiToken'
import Main from '../../components/main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export const Routes = props =>
<MuiThemeProvider>
<Router history={browserHistory}>

<Switch>

  <Layout path="/measurement" component={Measurement}/>
  <Layout path="/recived/:id" component={LiveRecivedData}/>
  <Layout path="/gettoken" component={GetApiToken}/>
  
  <Route path="/login" component={Login}/>
</Switch>

</Router>
</MuiThemeProvider>
