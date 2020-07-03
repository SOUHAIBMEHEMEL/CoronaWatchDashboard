import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginModerateur from './Components/Moderateur/auth/loginPage'
import LogoutModerateur from './Components/Moderateur/auth/logout'
import ModeratorPage from './Components/Moderateur/auth/ModeratorPage'

import LoginRedacteur from './Components/Redacteur/auth/loginPage'
import LogoutRedacteur from './Components/Redacteur/auth/logout'
import RedacteurPage from './Components/Redacteur/auth/RedacteurPage'

import LoginAgentDeSante from './Components/AgentDeSante/auth/loginPage'
import LogoutAgentDeSante from './Components/AgentDeSante/auth/logout'
import AgentDeSantePage from './Components/AgentDeSante/auth/AgentDeSantePage'

import AddZone from './Components/AgentDeSante/addZone/addZone'

import Gestionnaire from './Components/gestionnaire'

export default class logout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Gestionnaire} />
        <Route exact path='/Moderateur/login' component={LoginModerateur} />
        <Route exact path='/Moderateur/ModeratorPage' component={ModeratorPage} />
        <Route exact path='/Moderateur/logout' component={LogoutModerateur} />
        <Route exact path='/Redacteur/login' component={LoginRedacteur} />
        <Route exact path='/Redacteur/RedacteurPage' component={RedacteurPage} />
        <Route exact path='/Redacteur/logout' component={LogoutRedacteur} />
        <Route exact path='/AgentDeSante/login' component={LoginAgentDeSante} />
        <Route exact path='/AgentDeSante/AgentDeSantePage' component={AgentDeSantePage} />
        <Route exact path='/AgentDeSante/logout' component={LogoutAgentDeSante} />
        <Route exact path='/AgentDeSante/addZone/addZone' component={AddZone}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}


