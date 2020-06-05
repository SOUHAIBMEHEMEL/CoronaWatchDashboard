import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Moderateur from './Moderateur/Moderateur'
import Redacteur from './Redacteur/Redacteur'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

export default function gestionnaire() {
  
  return (
    
    <div>
        <div id='menuChoix' style={{backgroundColor:'#F0F0FA', paddingTop:'10%', paddingLeft:'40%', position: 'fixed', height:'100%', width:'100%'}}> 
        <Grid item lg={4} md={4} xl={6} xs={6} style={{backgroundColor:'#fff', border: '1px solid #CCCCDD', borderRadius:'5px', paddingTop:'5%', paddingBottom:'5%'}}>
            <List >
                <ListItem button key='0' className={'menuItem1'}  >
                    <ListItemAvatar>
                     <Avatar />
                    </ListItemAvatar>
                    <Link style={{color:'#444456'}} to='/Moderateur/login'>Moderateur</Link>
                </ListItem>
                <ListItem button key='1' className={'menuItem1'}  >
                    <ListItemAvatar>
                     <Avatar />
                    </ListItemAvatar>
                    <Link style={{color:'#444456'}} to='/Redacteur/login'>Redacteur</Link>
                </ListItem>
                <ListItem button key='1' className={'menuItem1'}  >
                    <ListItemAvatar>
                     <Avatar />
                    </ListItemAvatar>
                    <Link style={{color:'#444456'}} to='/AgentDeSante/login'>Agent de santé</Link>
                </ListItem>
            </List>          
        </Grid>    
       </div>
    </div>
    
  );
}


