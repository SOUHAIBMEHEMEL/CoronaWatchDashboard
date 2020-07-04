import React, {Component} from 'react' ;
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup,CircleMarker } from 'react-leaflet';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios' ;


import Button from '@material-ui/core/Button';

const token= localStorage.getItem('token') ;

let myIcon = L.icon({
    iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
    iconSize : [25, 40],
    iconAnchor : [12, 40],
    popupAnchor : [0, -40]
  })

const position = [40.5545, -89.61];

class map extends Component {

    
    

    state = {
        id : 0 ,
        statistic: {
            confirmed_infected_total: 0,
            confirmed_active_cases: 0,
            deaths: 0,
            recovered: 0,
            suspicious_cases: 0,
            asymptomatic_cases: 0,
            new_cases: 0,
            new_deaths: 0,
            
          },
        name:"",
        radius: 0,
        longitude: 0,
        latitude: 0,
        national: true,
        timestamp : null,
        modalShow : false,
    }

    style = {
        width: '100%',
        height: '80vh'
      }



     

      getZoneFromDataBase = () => {
         var id = this.state.id ;
        axios.get(`https://corona-watch-esi.herokuapp.com/cartography/regions/${id}/`,{headers : {'Authorization': `Bearer ${token}`}
            })
            .then(res => {
                this.setState({
                    id : this.state.id ,
                  statistic: {
                      confirmed_infected_total: res.data.statistic.confirmed_infected_total,
                      confirmed_active_cases: res.data.statistic.confirmed_active_cases,
                      deaths: res.data.statistic.deaths,
                      recovered: res.data.statistic.recovered,
                      suspicious_cases: res.data.statistic.suspicious_cases,
                      asymptomatic_cases: res.data.statistic.asymptomatic_cases,
                      new_cases: res.data.statistic.new_cases,
                      new_deaths: res.data.statistic.new_deaths,
                    },
                    name:res.data.name,
                    radius: res.data.radius,
                    longitude: res.data.longitude,
                    latitude: res.data.latitude,
                    national: res.data.national,
                    timestamp : res.data.timestamp,
                    modalShow : this.state.modalShow,
                }) ;

                console.log(this.state) ;
                this.setState({
                modalShow : true,
                    })
  
              })
            .catch( error => {
                console.error(error);
                alert("Une erreur s'est produite lors de la récupération de la zone ! ");
            })
      }


      onClickMarker = (e) => {
          this.setState({
              id : e ,
          })
        this.getZoneFromDataBase();
        
        
       }


    render() {

        var regions = this.props.regions;

        const MyVerticallyCenteredModal = (props) => {
            return (
              <Modal
                {...props}
                size="sm"
                backdrop="static"
                  keyboard={false}
               aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter" >
                
                    {this.state.name}
                  
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                    <p>Cas infectés confirmés (total) : {this.state.statistic.confirmed_infected_total}</p>
                    <p>Cas actifs confirmés : {this.state.statistic.confirmed_active_cases}</p>
                    <p>Nombre de décès :{this.state.statistic.deaths} </p>
                    <p>Cas rétablis : {this.state.statistic.recovered}</p>
                    <p>Cas suspects : {this.state.statistic.suspicious_cases}</p>
                    <p>Cas asymptomatiques : {this.state.statistic.asymptomatic_cases}</p>
                    <p>Nouveaux cas : {this.state.statistic.new_cases}</p>
                    <p>Nouveaux décès : {this.state.statistic.new_deaths}</p>
                    <p>Dernière modification : {this.state.timestamp}</p>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                      Fermer
                    </Button>
                    
                  </Modal.Footer>
              </Modal>
            );
          }


        return (
            <div>
                <Map center={position} 
                zoom={2}
                style={this.style}
                >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {regions.map((row,index) => {
                    return(
                    <CircleMarker center={[row.latitude,row.longitude]} 
                            color="red" 
                            radius={row.radius}
                            icon={myIcon}
                            key={row.id}
                            onClick={() => this.onClickMarker(row.id) }>
                </CircleMarker>
                )
                })}
                
                </Map>

                <MyVerticallyCenteredModal
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow : false})}
            />

            </div>
        )
    }
}

export default map ;