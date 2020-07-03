import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Scrollbars } from 'react-custom-scrollbars';
import RefreshIcon from '@material-ui/icons/Refresh';
import StyledBadge from '@material-ui/core/Badge';
import mock from '../data'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 23px -14px rgba(204,204,238,0.75)',
    width:'98%',
    marginLeft:'1.7%',
    borderRadius:'20px',
  },
  customisedScrollbar:{

  },
  demo: {
    backgroundColor: '#ffffff',
    borderRadius:'20px',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function InteractiveList() {
  const classes = useStyles();
  const [dense] = React.useState(false);

  return (
      <Grid className={classes.root} container >
        <Grid style={{width:'100%'}}>
          <div style={{width:'95%', marginLeft:'5%',display:'flex',}}>
            <div style={{width:'60%',display:'flex'}}>
              <Typography variant="h6" className={classes.title}>
                Reseaux Sociaux
              </Typography>
            </div>
            <div style={{width:'40%', display:'flex',}}>
              <StyledBadge badgeContent={4} color="secondary" style={{marginTop:'47px',marginLeft: '51%'}}></StyledBadge>
              <IconButton aria-label="filter list" style={{marginTop:'31px', marginLeft: '10%', width:'35px', height:'35px'}}>
                <RefreshIcon/>
              </IconButton>
            </div>
          </div>
          <div className={classes.demo}>
          <Scrollbars style={{ height: 300,}} >
            <List dense={dense}>
              {mock.NouveautesReseaux.map(stat => (
                <ListItem key={stat.id}>
                <ListItemAvatar>
                  <Avatar src={stat.logo} />
                </ListItemAvatar>
                <ListItemText
                  primary={stat.titre}
                  secondary={stat.date}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" style={{left:'-5px' }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              ))}
            </List>
          </Scrollbars>
          </div>
        </Grid>
      </Grid>
    
  );
}

