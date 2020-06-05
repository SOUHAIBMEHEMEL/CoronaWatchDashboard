import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class logout extends Component {

    constructor(props){
        super(props)
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
    }

  render() {
    return (
      <div style={{paddingTop:'15%', paddingLeft:'33%'}}>
        <h1>Deconnecte Avec Succes</h1>
        <Link style={{marginLeft:'8%'}} to='/'>Cliquer ici pour aller a la premiere page</Link>
      </div>
    );
  }
}


