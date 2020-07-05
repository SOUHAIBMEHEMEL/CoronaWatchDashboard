import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import PeopleIcon from '@material-ui/icons/People';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import RoomIcon from '@material-ui/icons/Room';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    boxShadow: '0px 2px 23px -14px rgba(204,204,238,0.75)',
    borderRadius:'20px',
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    color:'#4E73DF',
  },
  avatar: {
    backgroundColor: '#ffffff',
    height: 56,
    width: 56
  },
  icon: {
    color: '#4E73DF',
    height: 45,
    width: 45
  },

}));

export default function Card1(props) {
  var { title,value} = props;
  const { className, ...rest } = PropTypes;
  const classes = useStyles();

  return (
    <div>

<Grid container item lg={8} md={8} xl={8} xs={8} style={{top:'10px', zIndex:'9999', position:'fixed'}}>
                <Card style={{height:'40px', width:'40px', backgroundColor:'#fff', borderRadius:'20px',boxShadow: '1px 2px 11px -1px rgba(54,54,118,0.75)',}}>
                  <InsertChartIcon style={{color:'#666',height:'26px', width:'26px', marginTop:'7px', marginLeft:'7px' }}/>
                </Card>
                <Typography variant='h5' style={{textAlign:'left', marginLeft:'15px',color:'#fff', paddingTop:'5px'}}>
                  Statistiques
                </Typography>
              </Grid>


      <Card 
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Typography
                className={classes.title}
                gutterBottom
                variant="body2"
              >{title}Total infectés au monde</Typography>
              <Typography style={{textAlign:'left'}} variant="h5"><CountUp end={11187193} duration={2}/></Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <PeopleIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <br></br>

      <Card 
      {...rest}
      className={clsx(classes.root, className)}
      >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body2"
            >{title}Guérisons</Typography>
            <Typography style={{textAlign:'left'}} variant="h5"><CountUp end={6030374} duration={2}/></Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AccessibilityNewIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
      </Card>

      <br></br>

      <Card 
      {...rest}
      className={clsx(classes.root, className)}
      >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body2"
            >{title}Décès</Typography>
            <Typography style={{textAlign:'left'}} variant="h5"><CountUp end={538364} duration={2}/></Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <CancelPresentationIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
      </Card>

      <br></br>

      <Card 
      {...rest}
      className={clsx(classes.root, className)}
      >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body2"
            >{title}Nouveau cas</Typography>
            <Typography style={{textAlign:'left'}} variant="h5"><CountUp end={212319} duration={2}/></Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <FiberNewIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
      </Card>

      <br></br>

      <Card 
      {...rest}
      className={clsx(classes.root, className)}
      >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body2"
            >{title}Nombre de zones</Typography>
            <Typography style={{textAlign:'left'}} variant="h5"><CountUp end={13} duration={2}/></Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <RoomIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
      </Card>
    </div>
  );
};


