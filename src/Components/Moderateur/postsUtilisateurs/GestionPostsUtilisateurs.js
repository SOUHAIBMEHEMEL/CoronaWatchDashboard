import React from 'react';
import GestionArticles from './GestionPostsUtilisateursContent';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Loader from 'react-loader-spinner';



export default class BookList extends React.Component {
  state = {
      isLoaded: false,
      books: []
  }

  componentDidMount() {
    fetch('https://corona-watch-esi.herokuapp.com/content/videos/')
    .then((response) => response.json())
    .then(booksList => {
        this.setState({ books: booksList, isLoaded: true, });
    });
  }
  
  fetchBooks = () => {
      fetch('https://corona-watch-esi.herokuapp.com/content/videos/')
      .then((response) => response.json())
      .then(booksList => {
          this.setState({ books: booksList });
      });
  }
  
  render() {
    return (
      <div>
        {this.state.isLoaded && (
          <div>
          <Tooltip title="Refresh" style={{position:'fixed', top:'13px',right:'150px',backgroundColor:'#fff', zIndex:9999, height:'40px', width:'40px', boxShadow: '1px 2px 11px -1px rgba(54,54,118,0.75)',}}>
            <IconButton onClick={this.fetchBooks} aria-label="refresh" >
              <RefreshIcon style={{color:'#666',}}/>
            </IconButton>
          </Tooltip>
          <GestionArticles {...this.state.books}></GestionArticles>
          </div>
        )};
      </div>
    )
  }
}