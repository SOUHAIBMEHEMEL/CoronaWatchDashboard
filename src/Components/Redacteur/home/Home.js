import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NewArticle from './addArticle/NewArticle';
import ArticleList from './article/getArticleListDataFile';
import CommentList from './notificationsUsers/getCommentsDataFile' ;
import NotifsArticles from './notificationsModerator/getArticleListRedacteur';

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
