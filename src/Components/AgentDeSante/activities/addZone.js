import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const style = {
  map: {
    height: '400px',
    width: '100%'
  }
}

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[19.4100819, -99.1630388]]
    };
  }
  
  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    return (
      <Map 
        center={[19.4100819, -99.1630388]} 
        onClick={this.addMarker}
        zoom={13} 
        style={style.map}
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>Popup</span>
          </Popup>
        </Marker>
        )}
      </Map>
    );
  }
}

export default SimpleExample ;
