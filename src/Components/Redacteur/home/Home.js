import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NewArticle from './addArticle/NewArticle';
import ArticleList from './article/getArticleListDataFile';
import CommentList from './notificationsUsers/getCommentsDataFile' ;
import NotifsArticles from './notificationsModerator/getArticleListRedacteur';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    top :'0' ,
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item lg={8} md={8} xl={8} xs={8} style={{top:'10px', zIndex:'9999', position:'fixed'}}>
                <Card style={{height:'40px', width:'40px', backgroundColor:'#fff', borderRadius:'20px',boxShadow: '1px 2px 11px -1px rgba(54,54,118,0.75)',}}>
                  <HomeIcon style={{color:'#666',height:'26px', width:'26px', marginTop:'7px', marginLeft:'7px' }}/>
                </Card>
                <Typography variant='h5' style={{textAlign:'left', marginLeft:'15px',color:'#fff', paddingTop:'5px'}}>
                  Accueil
                </Typography>
              </Grid>
      <Grid container spacing={3}>
       
        <Grid item lg={6} md={6} xl={3} xs={12}>
            <NewArticle/>
        </Grid>
        
        <Grid item lg={6} md={6} xl={3} xs={12}>
          <Paper>
          <CommentList/>
            
          </Paper>
        </Grid>

        <Grid item lg={6} md={6} xl={3} xs={12}>
          <Paper>
          <ArticleList/>
              
           </Paper>
        </Grid>
    
        <Grid item lg={6} md={6} xl={3} xs={12}>
        <NotifsArticles/>
        </Grid>

      </Grid>
    </div>
  );
}
