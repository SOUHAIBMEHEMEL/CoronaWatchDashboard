import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {

  constructor(props){
    super(props)
    let loggedin = false

    this.state = {
      token: null,
      loggedIn:loggedin,
      credentials: {username: '', password: '', roles: ['WRITER'], email: '', 
      first_name: '', last_name: ''},
      login_credentials: {
        client_id:"FEqMPOyqzHI3FkrvS5GmduZa3OFy8plFL5sEBuHd", 
        client_secret:"BwDAYCbgvIUJO4bjd1cLq0iVPMFe4mRP3AIExj8tVSGWQs5QeDvwlPPl1ARerU4kq4fUc6HUqOTbksnHlmsNfWulDWFuVg5G4I15KLYsSVm8KYgsbVZkM0gLRddMcHum", 
        grant_type:"password",
        username: "",
        password: "",
      }
    }
  
  }

  
  login = event => {
    fetch('https://corona-watch-esi.herokuapp.com/auth/token/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.login_credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.token=data.access_token
        if(this.token){
          //this.props.userLogin(data.token);
          console.log(data)
          console.log(data.access_token)
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('refreshToken', data.refresh_token);
          console.log(localStorage.getItem('token'))
          console.log(localStorage.getItem('refreshToken'))
          this.setState({loggedIn: true})
        }
      }
    )
    .catch( error => console.error(error))
  }

  register = event => {
    fetch('https://corona-watch-esi.herokuapp.com/account/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
        localStorage.setItem('token',data.token);
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});

    const login_cred = this.state.login_credentials;
    login_cred[event.target.name] = event.target.value;
    this.setState({login_credentials: login_cred});
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to="/Redacteur/RedacteurPage" />
    }
    return (
      <div style={{paddingLeft:'25%', paddingRight:'15%', paddingBottom:'5%', paddingTop:'5%'}}>
        <h4 style={{paddingBottom:'7%'}}>S'authentifier</h4>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField id="outlined-basic" label="Nom D'utilisateur" variant="outlined" 
           type="text" name="username"
           value={this.state.login_credentials.username}
           onChange={this.inputChanged}  />
          </Grid>
        </Grid>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
           <TextField id="outlined-basic" label="Mot De Passe" variant="outlined" 
           type="password" name="password"
           value={this.state.login_credentials.password}
           onChange={this.inputChanged}  />
            
          </Grid>
        </Grid>
        <br/>
        <br/>
        <Button variant="contained" style={{marginLeft:'20%', marginRight:'8%'}} onClick={this.login}>Login</Button>
        <Button variant="contained" onClick={this.register}>Register</Button>
      </div>
    );
  }
}

export default Login;
