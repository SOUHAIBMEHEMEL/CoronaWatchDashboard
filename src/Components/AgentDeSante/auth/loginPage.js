import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Grid from '@material-ui/core/Grid';
import Login from './login'

export default function LoginPage() {
  
  return (
    
    <div>
        <div id='menuChoix' style={{backgroundColor:'#F0F0FA', paddingTop:'8%', paddingLeft:'32%', position: 'fixed', height:'100%', width:'100%'}}> 
        <Grid item lg={6} md={6} xl={8} xs={8} style={{backgroundColor:'#fff', border: '1px solid #CCCCDD', borderRadius:'5px', paddingTop:'2%', paddingBottom:'1%'}}>
            <Login/>   
        </Grid>    
       </div>
    </div>
    
  );
}


