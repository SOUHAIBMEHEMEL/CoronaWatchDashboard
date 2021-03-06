import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    borderRadius:'20px',
    boxShadow: '0px 2px 23px -14px rgba(204,204,238,0.75)',
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    color:'#F6C23E',
  },
  avatar: {
    backgroundColor: '#FFFFFF',
    height: 56,
    width: 56
  },
  icon: {
    height: 45,
    width: 45,
    color:'#F6C23E'
  },

}));

export default function Card4(props) {
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
              <PublicIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Card4.propTypes = {
  className: PropTypes.string
};


