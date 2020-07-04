import React, { Component } from 'react';
import axios from 'axios' ;
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';



const token= localStorage.getItem('token') ;



let myIcon = L.icon({
    iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
    iconSize : [25, 40],
    iconAnchor : [12, 40],
    popupAnchor : [0, -40]
  })

export default class SimpleExample extends Component {
  state = {
    statistic: {
        confirmed_infected_total: 0,
        confirmed_active_cases: 0,
        deaths: 0,
        recovered: 0,
        suspicious_cases: 0,
        asymptomatic_cases: 0,
        new_cases: 0,
        new_deaths: 0,
        region: null,
      },
      name:"",
      radius: 0,
      longitude: 0,
      latitude: 0,
      national: false,
      timestamp : null,
  }

  style = {
    width: '100%',
    height: '70vh',
  }

  handleAddZone =  () => {
    const timestamp = new Date().getTime();
    const now = new Date(timestamp);
    this.setState({
        timestamp : new Date(timestamp) ,
    })
    const donnees = {
        name: this.state.name,
        radius: this.state.radius,
        longitude: this.state.longitude,
        latitude: this.state.latitude,
        national: this.state.national
    }
    console.log(donnees) ;
    console.log(JSON.stringify(donnees)) ;
    fetch('https://corona-watch-esi.herokuapp.com/cartography/regions/', {
        method : 'POST',
      headers: {'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}` },
      body: JSON.stringify(donnees)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.id);
        const statistiques = {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: this.state.statistic.deaths,
            recovered: this.state.statistic.recovered,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: this.state.statistic.new_cases,
            new_deaths: this.state.statistic.new_deaths,
            region: data.id,

        }

        fetch('https://corona-watch-esi.herokuapp.com/cartography/regions-statistics/', {
            method : 'POST',
          headers: {'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}` },
          body: JSON.stringify(statistiques)
        }).then(data => data.json())
        .then(
            data => {
                console.log(data.id);
                alert("Zone ajoutée avec succes ! ");
            }
        )
        
      }
    )
    .catch( error => {
        console.error(error);
        alert("Une erreur s'est produite ! réessayer ");
    })
  } 

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
    
  }

  changeRadius= (e) => {
    this.setState({
      radius: e.target.value
    })
  }


  changeConfirmedInfectedTotal = (e) => {
    this.setState({
      statistic:  {
        confirmed_infected_total: e.target.value,
        confirmed_active_cases: this.state.statistic.confirmed_active_cases,
        deaths: this.state.statistic.deaths,
        recovered: this.state.statistic.recovered,
        suspicious_cases: this.state.statistic.suspicious_cases,
        asymptomatic_cases: this.state.statistic.asymptomatic_cases,
        new_cases: this.state.statistic.new_cases,
        new_deaths: this.state.statistic.new_deaths,
        region: this.state.statistic.region
      }
    })
  }

  changeConfirmedActiveCases= (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: e.target.value,
            deaths: this.state.statistic.deaths,
            recovered: this.state.statistic.recovered,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: this.state.statistic.new_cases,
            new_deaths: this.state.statistic.new_deaths,
            region: this.state.statistic.region
          }
    })
  }

  changeDeaths = (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: e.target.value,
            recovered: this.state.statistic.recovered,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: this.state.statistic.new_cases,
            new_deaths: this.state.statistic.new_deaths,
            region: this.state.statistic.region
          }
    })
  }

  changeRecovered = (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: this.state.statistic.deaths,
            recovered: e.target.value,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: this.state.statistic.new_cases,
            new_deaths: this.state.statistic.new_deaths,
            region: this.state.statistic.region
          }
    })
  }

  changeSuspecuousCases = (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: this.state.statistic.deaths,
            recovered: this.state.statistic.recovered,
            suspicious_cases: e.target.value,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: this.state.statistic.new_cases,
            new_deaths: this.state.statistic.new_deaths,
            region: this.state.statistic.region
          }
    })
  }

  changeAsymptomaticCases = (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: this.state.statistic.deaths,
            recovered: this.state.statistic.recovered,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: e.target.value,
            new_cases: this.state.statistic.new_cases,
            new_deaths: this.state.statistic.new_deaths,
            region: this.state.statistic.region
          }
    })
  }

  changeNewCases = (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: this.state.statistic.deaths,
            recovered: this.state.statistic.recovered,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: e.target.value,
            new_deaths: this.state.statistic.new_deaths,
            region: this.state.statistic.region
          }
    })
  }

  changeNewDeaths = (e) => {
    this.setState({
        statistic:  {
            confirmed_infected_total: this.state.statistic.confirmed_infected_total,
            confirmed_active_cases: this.state.statistic.confirmed_active_cases,
            deaths: this.state.statistic.deaths,
            recovered: this.state.statistic.recovered,
            suspicious_cases: this.state.statistic.suspicious_cases,
            asymptomatic_cases: this.state.statistic.asymptomatic_cases,
            new_cases: this.state.statistic.new_cases,
            new_deaths: e.target.value,
            region: this.state.statistic.region
          }
    })
  }

  changeNational =() => {
    var chk = document.getElementById("checkboxNational");
    if (chk.checked) {
      this.setState( {
        national : true,
      })
    }
  }

  addMarker = (e) => {
    //const {markers} = this.state
    console.log(e.latlng)
    this.setState({
        longitude : e.latlng.lng ,
        latitude : e.latlng.lat ,
    })
  }



  render() {
    const position = [this.state.latitude, this.state.longitude]
    return (
        <div>
          <h4 align="center">Ajouter une nouvelle zone</h4>
       <p align="center">Cliquez sur le centre de la zone sur la carte</p>
            <Map 
                center={[19.4100819, -99.1630388]} 
                onClick={this.addMarker}
                zoom={2} 
                style={this.style}
            >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        
          <Marker 
          position={[this.state.latitude, this.state.longitude]}
          icon={myIcon}>
          <Popup>
            <p>nouvelle zone ajoutée</p>
          </Popup>
        </Marker>
        
      </Map>
            <div class="container">
                <form class=" mt-2" action="" method="post" enctype="multipart/form-data">
                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                        <label class="required" for="name">Nom de la zone</label>
                        <input type="text" class="form-control" name="name" placeholder="nom de la zone" onChange={this.changeName} value={this.state.name} required="true"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="required" for="radius">Radius</label>
                        <input type="number" class="form-control" name="radius" placeholder="radius"  onChange={this.changeRadius} value={this.state.radius} required="true"/>
                    </div>
                 
                </div> 



                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label class="required" for="confirmed_infected_total">Cas infectés confirmés (total)</label>
                            <input type="number" class="form-control" id="confirmed_infected_total" placeholder="Cas infectés confirmés (total)"  onChange={this.changeConfirmedInfectedTotal} value={this.state.statistic.confirmed_infected_total} required="true"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label class="required" for="confirmed_active_cases">Cas actifs confirmés</label>
                            <input type="number" class="form-control" id="confirmed_active_cases" placeholder="Cas actifs confirmés"  onChange={this.changeConfirmedActiveCases} value={this.state.statistic.confirmed_active_cases} required="true"/>
                        </div>
                    </div>

                    
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label class="required" for="deaths">Nombre de décès</label>
                            <input type="number" class="form-control" id="deaths" placeholder="Décès"  onChange={this.changeDeaths} value={this.state.statistic.deaths} required="true"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label class="required" for="recovered">Cas rétablis</label>
                            <input type="number" class="form-control" id="recovered" placeholder="Guérisons"  onChange={this.changeRecovered} value={this.state.statistic.recovered} required="true"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label class="required" for="suspicious_cases">Cas suspects</label>
                            <input type="number" class="form-control" id="suspicious_cases" placeholder="Cas suspects"  onChange={this.changeSuspecuousCases} value={this.state.statistic.suspicious_cases} required="true"/>
                        </div>
                    </div>   
                    

                    
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label class="required" for="asymptomatic_cases">Cas asymptomatiques</label>
                                <input type="number" class="form-control" id="asymptomatic_cases" placeholder="Cas asymptomatiques"  onChange={this.changeAsymptomaticCases} value={this.state.statistic.asymptomatic_cases} required="true"/>
                            </div>
                            <div class="form-group col-md-4">
                                <label class="required" for="new_cases">Nouveaux cas</label>
                                <input type="number" class="form-control" id="new_cases" placeholder="Nouveaux cas"  onChange={this.changeNewCases} value={this.state.statistic.new_cases} required="true"/>
                            </div>
                            <div class="form-group col-md-4">
                                <label class="required" for="new_deaths">Nouveaux décès</label>
                                <input type="number" class="form-control" id="new_deaths" placeholder="Nouveaux décès"  onChange={this.changeNewDeaths} value={this.state.statistic.new_deaths} required="true"/>
                            </div>
                        </div> 

                        <div class="form-group">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"  id="checkboxNational" onClick={this.changeNational} />
                          <label class="form-check-label" for="invalidCheck2">
                            Zone nationale
                          </label>
                        </div>
                      </div>

                        <input hidden name="longitude" value={this.state.longitude} />
                        <input hidden name="latitude" value={this.state.latitude} />
                        <input hidden name="national" value={this.state.national} />
                        <input hidden name="statistic" value={this.state.statistic} />


                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <Button
                                variant="contained"
                                //color="secondary"
                                class="btn btn-secondary form-control"
                                block
                                //onclick = {handleAddZone}
                                //className={classes.button}
                                //startIcon={<AddIcon />}
                            >
                                Annuler
                            </Button>
                                
                            </div>
                            <div class="form-group col-md-6">
                            <Button
                                name="submit"
                                class="btn btn-primary form-control"
                                //type="submit"
                                variant="contained"
                                //color="primary "
                                block
                                onClick = {this.handleAddZone}
                                //className={classes.button}
                                //startIcon={<AddIcon />}
                            >
                                Confirmer
                            </Button>
                                
                            </div>
                           
                        </div> 


                        
                    
                    
                </form>
            </div>
      </div>
    )
  }
}