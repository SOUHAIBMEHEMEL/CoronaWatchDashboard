import React , {Component} from 'react' ;
import axios from 'axios' ;
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';
import { Card} from '@material-ui/core';


const token= localStorage.getItem('token') ;

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  //const classes = useStyles();
 


class ModifyZone extends Component{

   
    
    
    state = {
        id: 0 ,
        statistic: {
            id :0 ,
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

     
     handleChange = (event) => {
        
        this.setState({
            id : event.target.value,
        })
        
    };

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
              id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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
                id: this.state.statistic.id ,
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

      

   
        
        

          onClickMarker = () => {
              
             var id = this.state.id ;
            axios.get(`https://corona-watch-esi.herokuapp.com/cartography/regions/${id}/`,{headers : {'Authorization': `Bearer ${token}`}
                    })
                    .then(res => {

                        this.setState(
                            {
                                id: res.data.id,
                            statistic: {
                                id: res.data.statistic.id ,
                                confirmed_infected_total: res.data.statistic.confirmed_infected_total,
                                confirmed_active_cases: res.data.statistic.confirmed_active_cases,
                                deaths: res.data.statistic.deaths,
                                recovered: res.data.statistic.recovered,
                                suspicious_cases: res.data.statistic.suspicious_cases,
                                asymptomatic_cases: res.data.statistic.asymptomatic_cases,
                                new_cases: res.data.statistic.new_cases,
                                new_deaths: res.data.statistic.new_deaths,
                                region : res.data.statistic.region,
                                },
                                name:res.data.name,
                                radius: res.data.radius,
                                longitude: res.data.longitude,
                                latitude: res.data.latitude,
                                national: res.data.national,
                                timestamp : res.data.timestamp,

                            }

                        )
                       
                        var chk = document.getElementById("checkboxNational").checked = this.state.national ;

                    })
                    .catch( error => {
                        console.error(error);
                        alert("Une erreur s'est produite lors de la récupération de la zone ! ");
                    })
                        
           }


           handleModifyZone= () => {
              console.log(this.state);
            var id = this.state.id ;
            var idstat = this.state.statistic.id ;
            console.log(idstat);

            axios.patch(`https://corona-watch-esi.herokuapp.com/cartography/regions-statistics/${idstat}/`, {
                "confirmed_infected_total": this.state.statistic.confirmed_infected_total,
                "confirmed_active_cases": this.state.statistic.confirmed_active_cases,
                "deaths": this.state.statistic.deaths,
                "recovered": this.state.statistic.recovered,
                "suspicious_cases": this.state.statistic.suspicious_cases,
                "asymptomatic_cases": this.state.statistic.asymptomatic_cases,
                "new_cases": this.state.statistic.new_cases,
                "new_deaths": this.state.statistic.new_deaths,
                "region": this.state.statistic.region,
                
              }) .then(response => {
                  console.log(response);
                  axios.patch(`https://corona-watch-esi.herokuapp.com/cartography/regions/${id}/`,
            {
                
                "name": this.state.name,
                "radius":  this.state.radius,
                "longitude": this.state.longitude,
                "latitude": this.state.latitude,
                "national": this.state.national,
              }

           
            )
                   .then(res => {
                      
                      console.log( "afterMofif");
                      console.log(res);
                      alert("Modifier avec succès ! ");

                     

                   })
              })
           
                   .catch( error => {
                       console.error(error);
                       alert("Une erreur s'est produite lors de la récupération de la zone ! ");
                   })
                       
          }

    render() {

        var classes = this.props.classes;

        var regions  = this.props.regions;

        return (
            <div>

              <Card>
              <h4 align="center">Modifier les informations d'une zone</h4>
              
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Zone</InputLabel>
                    <Select
                    search
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.id}
                    onChange={this.handleChange}
                    label="Zone"
                    >
                    <MenuItem value="" >
                        <em>Aucune</em>
                    </MenuItem>
                    {regions.map((row,index) => {
                        return(
                        <MenuItem  value={row.id}>{row.name}  ({row.latitude},{row.longitude} )</MenuItem>
                    )
                    })}
                   
                    </Select>
                </FormControl>

                
                    <Button
                        variant="contained"
                        block    
                        class="btn btn-secondary form-control" 
                        onClick={this.onClickMarker}>
                            Choisir
                    </Button>
                    <br></br>

                    </Card>

                    <br></br>

                    <Card>
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
                                onClick = {this.handleModifyZone}
                                //className={classes.button}
                                //startIcon={<AddIcon />}
                            >
                                Confirmer les modifications
                            </Button>
                                
                            </div>
                           
                        </div> 
                    
                </form>
            </div>
            </Card>
                                
                

               

            </div>
        )
    }
}




export default ModifyZone ;