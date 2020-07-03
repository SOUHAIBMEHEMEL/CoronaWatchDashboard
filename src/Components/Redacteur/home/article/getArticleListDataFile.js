import React from 'react' ;
import ReactDOM from 'react-dom';
import axios from 'axios' ;
import ArticlesList from './listeArticles';

const token= localStorage.getItem('token') ;

export default class getArticleListDataFile extends React.Component{

    state = {
        articles : []
    }

    componentDidMount (){
        axios.get(`https://corona-watch-esi.herokuapp.com/content/articles-verified/`,{headers : {'Authorization': `Bearer ${token}`}
      })
      .then(res => {
        const article = res.data;
    
        
        this.setState({
          articles : this.state.articles.concat(article)
        }
         );
         console.log(this.state.articles) ;
      })
      
  }

  render() {
    return (
     <ArticlesList {...this.state}/>
    )
  }
}