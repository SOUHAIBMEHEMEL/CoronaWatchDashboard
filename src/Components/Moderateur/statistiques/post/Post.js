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
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

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
    console.log('id= ',id);
    axios.delete('https://corona-watch-esi.herokuapp.com/scrapping/youtube-videos/'+id)
    .then((response) => {
      console.log(response);
      document.getElementById('supprimerBtn').style.display='none';
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
      
    <TwitterTweetEmbed tweetId={'1267938542082121728'}>

    </TwitterTweetEmbed>   
  );
};  


