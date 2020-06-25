import React from 'react';
import '../../../App.css';
import Grid from '@material-ui/core/Grid';

export default class BookList extends React.Component {
  
  render() {
    return (
        <Grid container spacing={3} style={{height:'100%', width:'100%', backgroundColor:'#fff', position:'fixed', top:'12px', left:'12px',zIndex:'99999'}}>
            <div id='loading' style={{width:'100%', height:'100%'}}>
                <div style={{position:'absolute', top:'45%', left:'48%'}} class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
        </Grid>
    )
  }
}