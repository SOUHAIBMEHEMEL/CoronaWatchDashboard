import React from 'react';
import '../../App.css' ;
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaceIcon from '@material-ui/icons/Place';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Dashboard from './dashboard/Dashboard'; 
import Test from './test_fonctionnel_article/GestionArticles';
import Statistiques from './statistiques/InfoReseaux';
import MonCompte from './dashboard/Dashboard';
import GestionDesArticles from './GestionArticles/GestionArticles';
import InfosReseaux from './infosReseaux/InfoReseaux'
import DailyMotion from './dailyMotion/InfoReseaux'
import GestionPostsUtilisateurs from './postsUtilisateurs/GestionPostsUtilisateurs';
import {Link} from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  navBar:{
    position:'fixed',
    marginTop: '-8px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#ffffff',
    height: '50px',
    boxShadow: '0px -3px 10px 0px rgba(204,204,238,0.75)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:'#ffffff',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    color:'#ffffff',
    fontSize:'15px',
    fontWeight:'2%',
  },
  menuRow:{
    '&:hover':{backgroundColor:'rgba(255,255,255,.1)',},
    '&:first-child':{
      backgroundColor:'rgba(0,0,100,.15)',
      borderLeft:'5px solid #fff'
    },
  },
  menuClose:{
    color:'#ffffff',
    position:'absolute',
    right:'1.9%',
    top:'7px',
    height:'35px',
    width:'35px', 
    '&:hover':{backgroundColor:'rgba(255,255,255,.1)',}
  },
  profilePhoto: {
    marginLeft:'10px',
    marginTop: '6px',
    height:'40px',
    width:'40px'
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    border:'1px #EEEEEE solid'
  },
  NotificationsBtn:{
    marginTop:'8px',
    marginRight:'10px',
    height:'37px',
    width:'37px'
  },
  search: {
    position: 'relative',
    borderTopLeftRadius:'5px',
    borderBottomLeftRadius:'5px',
    backgroundColor: fade('#CCCCDD', 0.2),
    '&:hover': {
      backgroundColor: fade('#CCCCDD', 0.3),
    },
    
    left: '-16px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    width:'11%',
    borderTopRightRadius:'5px',
    borderBottomRightRadius:'5px',
    position: 'absolute',
    top: '1.2%',
    left:'95%',
    backgroundColor:'#4E73DF',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color:"action",
    width: '320px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc( ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    position:'fixed',
    right: '2.5%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:'#4E73DF',
    boxShadow: '-3px 52px 10px 0px rgba(204,204,238,0.75)',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  main:{

  },
  content: {
    backgroundColor: fade('#CCCCFE', 0.15),
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  const menuId = 'primary-search-account-menu';
  
  function chooseIncon (index) {
    if (index === 0 ) return (<DashboardIcon/>) ;
    if (index === 1 ) return (<AssignmentIcon /> ) ;
    if (index === 2 ) return (<PlaceIcon/>) ;
    if (index === 3 ) return (<GroupIcon/>) ;
    if (index === 4 ) return (<YouTubeIcon/>) ;
    if (index === 5 ) return (<TwitterIcon/>) ;
    if (index === 6 ) return (<PublicIcon/>) ;
  }

  function  handleContent (index){
    var menuElement = document.getElementsByClassName('menuItem01');
    var element = document.getElementsByClassName('contentModerateur');
    for (let i = 0; i < element.length; i++){
      element[i].style.display = "none";
      menuElement[i].style.borderLeft = '5px solid transparent'; 
      menuElement[i].style.background= "#4E73DF";
    }
    menuElement[index].style.background= "rgba(0,0,100,.15)";
    element[index].style.display = "block";
    menuElement[index].style.borderLeft = '5px solid #fff';
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={"toolbar",classes.navBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon color="action" />
          </IconButton>
          <div className={classes.search}>
            <InputBase 
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon style={{color:"#ffffff",}} />
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show new notifications" color="inherit" className={classes.NotificationsBtn}>
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon  color='action' />
              </Badge>
            </IconButton>
            <IconButton className={classes.profilePhoto}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="action"
            >
              <Avatar alt="Remy Sharp" src="/images/face16.jpg" className={classes.small}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{height:'100%',}}>
        <div className={classes.drawerHeader}>
          {
          // ADD a reference to the LOGO HERE 
          <img alt='logo' src="/images/logo.png" height='100'width='100' style={{margin:'40px', marginRight:'60px'}}/>
          }


          
          <IconButton onClick={handleDrawerClose} className={classes.menuClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider style={{width:'50%', marginLeft:'25%',backgroundColor:'#fff', marginBottom:'10px'}} />
        <List>
          {['Dashboard','Gestion des articles','Gestion des zones', 'Gestion des postes',
              'Youtube', 'Twitter', 'Dailymotion'].map((text, index) => (
            <ListItem button key={index} className={'menuItem01'} onClick={event => handleContent(index)} >
              <ListItemIcon className={classes.menuItem}>
                {chooseIncon(index)}
              </ListItemIcon>
              <ListItemText  primary={text} className={classes.menuItem} /> 
            </ListItem>
          ))}
        </List>
        <Divider style={{ backgroundColor:'#fff', marginTop:'10px'}} />

        <List>
          {[' Déconnexion'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.menuItem}>
                <ExitToAppIcon/>
              </ListItemIcon>
              <Link style={{color:'#ffffff'}} to='/Moderateur/logout'>Se Deconnecter</Link> 
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>
      <main style={{ marginTop: "3.75%"}}
        className={classes.main, clsx(classes.content, {
          [classes.contentShift]: open,
        })} 
      >
        <Grid className={'contentModerateur'} item lg={12} md={12}>
          <Dashboard/>         
        </Grid>
        <Grid className={'contentModerateur'} style={{display:'none'}} item lg={12} md={12}>
          <GestionDesArticles />         
        </Grid>
        <Grid className={'contentModerateur'} style={{display:'none'}} item lg={12} md={12}>
          <Test />         
        </Grid>
        <Grid className={'contentModerateur'} style={{display:'none'}} item lg={12} md={12}>
          <GestionPostsUtilisateurs />         
        </Grid>
        <Grid className={'contentModerateur'} style={{display:'none'}} item lg={12} md={12}>
          <InfosReseaux />         
        </Grid>
        <Grid className={'contentModerateur'} style={{display:'none'}} item lg={12} md={12}>
          <Statistiques/>         
        </Grid>
        <Grid className={'contentModerateur'} style={{display:'none'}} item lg={12} md={12}>
          <DailyMotion />         
        </Grid>
      </main> 
    </div>
  );
}
