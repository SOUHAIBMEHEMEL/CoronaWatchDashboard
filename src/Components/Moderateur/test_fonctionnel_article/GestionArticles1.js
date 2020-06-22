import React from 'react';
import GestionArticles from './GestionArticles';
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
    fetch('https://corona-watch-esi.herokuapp.com/scrapping/tweets/')
    .then((response) => response.json())
    .then(booksList => {
        this.setState({ books: booksList, isLoaded: true, });
    });
  }
  
  fetchBooks = () => {
      fetch('https://corona-watch-esi.herokuapp.com/scrapping/tweets/')
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
          <Tooltip title="Refresh" style={{position:'fixed', top:'1.4%',right:'9.5%', zIndex:9999, height:'35px', width:'35px'}}>
            <IconButton onClick={this.fetchBooks} aria-label="refresh" >
              <RefreshIcon/>
            </IconButton>
          </Tooltip>
          <GestionArticles {...this.state.books}></GestionArticles>
          </div>
        )};
      </div>
    )
  }
}