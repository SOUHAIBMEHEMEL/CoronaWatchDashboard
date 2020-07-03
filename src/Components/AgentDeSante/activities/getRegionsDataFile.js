import React from 'react' ;
import axios from 'axios' ;
import MapData from './mapContainer';

const token= localStorage.getItem('token') ;


export default class getRegionsDataFile extends React.Component{

    state = {
        regions : []
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
      
  }

  render() {
    return (
     <MapData {...this.state}/>
    )
  }
}
