import React from 'react';
import Async from 'react-async';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Map from './map/Map'
import NouvellesZones from './nouvellesZones/NouvellesZones'
import mock from './data'
import mock1 from './test.json'
import PlaceIcon from '@material-ui/icons/Place';
import { Card } from '@material-ui/core';
import Upload from '../upload/upload';
import '../../../App.css';


// load data
const loadData = () =>
  fetch("https://corona-watch-esi.herokuapp.com/content/articles/")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export default function PersistentDrawerLeft() {
  
  return (
    <Async promiseFn={loadData}>
        {({ data, err, isLoading }) => {
          if (isLoading) {return (<Upload></Upload>) }
          if (err) return `Something went wrong: ${err.message}`

          if (data){
            return (
              <Grid container spacing={3}>
                <Grid container item lg={8} md={8} xl={8} xs={8} style={{top:'5px', zIndex:'9999', position:'fixed',}}>
                  <Card style={{height:'40px', width:'40px', backgroundColor:'#fff', borderRadius:'20px',boxShadow: '1px 2px 11px -1px rgba(54,54,118,0.75)',}}>
                    <PlaceIcon style={{color:'#666',height:'20px', width:'20px', marginTop:'10px', marginLeft:'10px' }}/>
                  </Card>
                  <Typography variant='h5' style={{textAlign:'left', marginLeft:'15px',color:'#fff', paddingTop:'5px'}}>
                    Gestion Des Zones 
                  </Typography>
                </Grid>

                <Grid  item lg={6} md={6} xl={3} xs={12} style={{marginBottom:'500px',}}>
                  <Card style={{paddingTop:'0px', height:'100%', width:'100%', backgroundColor:'#fff', borderRadius:'20px',boxShadow: '1px 2px 11px -1px rgba(54,54,118,0.75)',}}>
                  <Typography variant='h6' style={{textAlign:'left', padding:'15px'}}>
                    Map Des Zones Declarees
                  </Typography>
                  <div id='mapContainer'>
                      <div id='divMap'>
                        <Map/>
                      </div>
                    </div>
                  </Card>  
                </Grid>

                  <Grid item lg={6} md={12} xl={9} xs={12}>
                    <NouvellesZones/>
                  </Grid>
              </Grid>
            )}
        }}
      </Async>
  );
}