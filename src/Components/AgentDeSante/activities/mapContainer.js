import React from 'react' ;
import {GoogleMap, useLoadScript,Marker,InfoWindow} from '@react-google-maps/api';
import mapStyles from './mapStyles';
import {formatRelative} from 'date-fns';


const libraries = ["places"] ;
const mapContainerStyle = {
  width : '100vw',
  height : '100vh',
};
const center  = {
  lat : 36.694851,
  lng : 3.085866,
}

const options = {
  styles : mapStyles,
  disableDefaultUI : true,
  zoomControl : true,
}

export default function DisplayMap() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey : "AIzaSyDJe8S8csS8J59rfGh7CpXzQ9s8BYvm-z8",
    libraries
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const onMapClick = React.useCallback((event) => {
    setMarkers(current => [...current, {
      lat : event.latLng.lat(),
      lng : event.latLng.lng(),
      time : new Date(),
    },])
  }, []) ;


  if(loadError) return "Error Loading maps" ;
  if(!isLoaded) return "Loading Maps" ;

  return(
    <div>
      <GoogleMap
        mapContainerStyle = {mapContainerStyle}
        zoom={8}
        center = {center}
        options = {options}
        onClick={onMapClick}
      >
        {markers.map(marker => (
          <Marker 
            key={marker.time.toISOString()} 
            position={{lat: marker.lat, lng:marker.lng}} 
            onClick={() => {
              setSelected(marker);
            }
            }
          >
            {selected ? (
            <InfoWindow 
              position={{lat : selected.lat, lng: selected.lng}}
              onCloseClick= {() => {
                setSelected(null);
              }}
            >
              <div>
                <p>Spotted </p>
              </div>
            </InfoWindow>) : null }
          </Marker>
        ))}

        
      </GoogleMap>
    </div>
  )

}