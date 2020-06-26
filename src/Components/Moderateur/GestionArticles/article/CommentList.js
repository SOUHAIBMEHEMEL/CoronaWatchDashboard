import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Loader from 'react-loader-spinner';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';



export default class BookList extends React.Component {
  state = {
      isLoaded: false,
      books: []
  }

  componentDidMount() {
    fetch("https://corona-watch-esi.herokuapp.com/content/post-comments/"+this.props.id)
    .then((response) => response.json())
    .then(booksList => {
        this.setState({ books: booksList, isLoaded: true, });
        console.log(this.state.books);
    });
  }
  
  
  render() {
    return (
        <Grid container spacing={2} style={{padding:'10px'}}>
        {this.state.books.map(stat => (
            <Grid container spacing={2} style={{padding:'3%', textAlign:'left',paddingBottom:'0px'}}>
            <Grid item md={1} lg={1}>
              <Avatar src={'../images/face24.jpg'} aria-label="Photo de profile" >
              </Avatar>
            </Grid>
            <Grid container item md={11} lg={11}>
              <Grid item style={{maxWidth:'80%', marginLeft:'3%'}}>
                <Typography variant="h6" style={{fontSize:'14px'}}>Utilisateur 1</Typography>
                <Button style={{backgroundColor:'#EEEEEE', borderRadius:'20px', paddingLeft:'10px', paddingRight:'10px',textAlign:'left'}}>
                  {stat.content}
                </Button>
                <Typography variant="h6" style={{marginLeft:'20px', fontSize:'14px', color:'#888888'}}>il y a 10 minutes</Typography>
              </Grid>
              <Grid item>
                <IconButton aria-label="settings" style={{marginTop:'25px', marginLeft:'2px', height:'35px', width:'35px'}}>
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          ))}
        </Grid>
    )
  }
}