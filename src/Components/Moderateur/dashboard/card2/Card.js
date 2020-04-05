import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    borderLeft: '5px solid #06bf6c',
    boxShadow: '0px 2px 23px -14px rgba(0,0,0,0.75)',
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    color:'#06bf6c',
  },
  avatar: {
    backgroundColor: '#06bf6c',
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },

}));

export default function Card2(props) {
  var { title,value} = props;
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
            >{title}</Typography>
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

Card2.propTypes = {
  className: PropTypes.string
};


