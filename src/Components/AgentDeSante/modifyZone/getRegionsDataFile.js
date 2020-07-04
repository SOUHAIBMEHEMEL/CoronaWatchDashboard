import React from 'react' ;
import axios from 'axios' ;
import MapData from './modifyZone';

const token= localStorage.getItem('token') ;



export default class getRegionsDataFile extends React.Component{

    state = {
        regions : [],
        classes : this.props.classes,
    }



    componentDidMount (){
      
      axios.get(`https://corona-watch-esi.herokuapp.com/cartography/regions/`,{headers : {'Authorization': `Bearer ${token}`}
                  })
      .then(res => {
        const region = res.data;
    
        
        this.setState({
          regions : this.state.regions.concat(region)
        }
         );
         console.log(this.state.regions) ;
         
      })
          .catch( error => {
            console.error(error);
            alert("Une erreur s'est produite lors de la récupération des zones ! réessayer ");
        })
      
  }

  render() {
   
    
      return (
        <MapData {...this.state}/>
       )
    
  }
}