import React from 'react';
import Async from 'react-async';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArticlesRecents from './articlesRecents/ArticlesRecents'
import Card1 from './card1/Card'
import Card2 from './card2/Card'
import Card3 from './card3/Card'
import Card4 from './card4/Card'
import Map from './map/Map'
import NouveautesReseaux from './nouveautesReseaux/NouveautesReseaux'
import NouvellesZones from './nouvellesZones/NouvellesZones'
import PostsRecents from './postsRecents/PostsRecents'
import mock from './data'
import mock1 from './test.json'
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Card } from '@material-ui/core';

// load data
const loadData = () =>
  fetch("https://corona-watch-esi.herokuapp.com/content/articles/")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export default function PersistentDrawerLeft() {
  
  return (
    <Async promiseFn={loadData}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data){
            return (
              <Grid container spacing={3}>
                <Grid container item lg={8} md={8} xl={8} xs={8} style={{top:'5px', zIndex:'9999', position:'fixed'}}>
                  <Card style={{height:'40px', width:'40px', backgroundColor:'#fff', borderRadius:'20px',boxShadow: '1px 2px 11px -1px rgba(204,204,208,0.85)',}}>
                    <DashboardIcon style={{color:'#666',height:'20px', width:'20px', marginTop:'10px', marginLeft:'10px' }}/>
                  </Card>
                  <Typography variant='h5' style={{textAlign:'left', marginLeft:'15px',color:'#fff', paddingTop:'5px'}}>
                    Dashboard
                  </Typography>
                </Grid>
                  
                  {mock1.Card1.map(stat => (
                    <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
                      <Card1 {...stat} />
                    </Grid>
                  ))}
                  {mock.Card2.map(stat => (
                    <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
                      <Card2 {...stat} />
                    </Grid>
                  ))}
                  {mock.Card3.map(stat => (
                    <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
                      <Card3 {...stat} />
                    </Grid>
                  ))}
                  {mock.Card4.map(stat => (
                    <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
                      <Card4 {...stat} />
                    </Grid>
                  ))}

                  <Grid item lg={6} md={6} xl={3} xs={12}>
                    
                  </Grid>
                  <Grid item lg={6} md={12} xl={9} xs={12}>
                    <NouvellesZones/>
                  </Grid>
                  <Grid item lg={4} md={12} xl={9} xs={12}>
                    <ArticlesRecents />
                  </Grid>
                  <Grid item lg={4} md={12} xl={9} xs={12}>
                    <PostsRecents />
                  </Grid>
                  <Grid item lg={4} md={12} xl={9} xs={12}>
                    <NouveautesReseaux />
                  </Grid>
              </Grid>
            )}
        }}
      </Async>
  );
}