import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import AssignmentIcon from '@material-ui/icons/Assignment';


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
  value = 134567 ;
  const { className, ...rest } = PropTypes;
  const classes = useStyles();

  return (
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
            >{title}xxx</Typography>
            <Typography style={{textAlign:'left'}} variant="h5"><CountUp end={value} duration={2}/></Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AssignmentIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


