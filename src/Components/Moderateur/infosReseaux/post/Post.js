import React from 'react';
import axios from 'axios';
import Async from 'react-async';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import mock from '../data';

import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    boxShadow: '0px 2px 23px -14px rgba(204,204,238,0.75)',
    borderRadius:'5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  articleBtn:{
    backgroundColor:'#fff',
    '&:hover':{backgroundColor:'rgba(255,255,255)',}
  },
  articleActionList:{
    width:'50%',
    marginLeft:'47%',
    marginBottom:'-120px',
    zIndex:'10',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  avatarCommentaire: {
    backgroundColor: red[500],
    marginTop:'25px'
  },
}));

export default function RecipeReviewCard(props) {
  const data=props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  var date =new Date(data.timestamp).toLocaleString();
  
  // load comments
  function loadComments() {
    axios.get("https://corona-watch-esi.herokuapp.com/content/post-comments/"+data.id)
        .then(res => {
          //MyComments = res.data;
          //this.setState({ emps });
          console.log(res.data);
        })
  }
  
  const supprimerPost = (event, id) => {
    const data1 ={
      "deleted": true,
     }
 
     axios.patch('https://corona-watch-esi.herokuapp.com/scrapping/youtube-videos/'+data.id, data1)
     .then((response) => {
       console.log(response);
       document.getElementById('validerBtn').style.display='none';
     }, (error) => {
       console.log(error);
     });
    
  }

  const validerArticle = (event, data) => {
    console.log('id= ',data.id);
    const data1 ={
     "verified": true,
    }

    axios.patch('https://corona-watch-esi.herokuapp.com/scrapping/youtube-videos/'+data.id, data1)
    .then((response) => {
      console.log(response);
      document.getElementById('validerBtn').style.display='none';
    }, (error) => {
      console.log(error);
    });
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <div style={{position:'absolute',marginTop:'15px', marginLeft:'300px'}}>
          {!data.verified ? 
          <Button id='validerBtn' variant="contained" color="primary" style={{backgroundColor:'#4E73DF', marginRight:'10px'}} onClick={event => validerArticle(event, data)}>
              Valider
          </Button>: <Button variant="contained" style={{marginRight:'10px'}} disabled>verifie</Button>}
          {!data.deleted ? 
          <Button id='supprimerBtn' variant="contained" color="secondary" onClick={event => supprimerPost(event, data.id)}>
              Supprimer
          </Button>: <Button variant="contained" disabled>Supprime</Button>}
        </div>
      <CardHeader style={{textAlign:'left'}}
        avatar={
          <Avatar src={"../../images/socialMedia/youtube.png"} >
          </Avatar>
        }
        title="YOUTUBE"
        subheader={date}
      />
      <CardContent>
        <Typography variant="h6" style={{textAlign:'left', paddingBottom:'2%'}} >
        {data.title}
        </Typography> 
      </CardContent>
      <Grid container spacing={1} style={{padding:'3%',}}>
        <Grid item lg={12} md={12} xl={12} xs={12}>
        <ReactPlayer url={"www.youtube.com/embed/"+data.youtube_id} controls={true} />
        </Grid>
      </Grid>
      <CardActions disableSpacing>
        <IconButton aria-label="comments">
          <ChatBubbleIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'right'}}>
        {mock.ArticleCard.commentaire}</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show comments"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{borderTop:'1px solid #DDDDDD', paddingBottom:'30px'}}>
        {mock.ArticleCard.listeCommentaires.map(stat => (
          <Grid container spacing={2} style={{padding:'3%', textAlign:'left',paddingBottom:'0px'}}>
          <Grid item md={1} lg={1}>
            <Avatar src={stat.photoProfilUtilisateur} aria-label="Photo de profile" >
            </Avatar>
          </Grid>
          <Grid container item md={11} lg={11}>
            <Grid item style={{maxWidth:'80%', marginLeft:'3%'}}>
              <Typography variant="h6" style={{fontSize:'14px'}}>{stat.nomUtilisateur}</Typography>
              <Button style={{backgroundColor:'#EEEEEE', borderRadius:'20px', paddingLeft:'10px', paddingRight:'10px',textAlign:'left'}}>
                {stat.contenuCommentaire}
              </Button>
              <Typography variant="h6" style={{marginLeft:'20px', fontSize:'14px', color:'#888888'}}>{stat.date}</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="settings" style={{marginTop:'25px', marginLeft:'2px', height:'35px', width:'35px'}}>
                <MoreHorizIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        ))}
      </Collapse>
    </Card>      
  );
};  


