import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../../../../App.css';
  
const mapStyles = {
    left:0,
top:0,
height:'100%',
width:'100%',
position:'absolute'
  };
  

export class MapContainer extends React.Component {
  
  
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />  
        );
    }    
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDJe8S8csS8J59rfGh7CpXzQ9s8BYvm-z8",
  })(MapContainer);
  