import React, { Component } from 'react';
import ApiManager from '../services/swapi';
import Spinner from './spinner'

export default class RandomPlanet extends Component {
  swapiServer=new ApiManager()

  state={
    planet:{},
    spinner:true,
    interval:false,
    PlanetPhotoURL:'https://starwars-visualguide.com/assets/img/placeholder.jpg'
  }

  PlanetLoaded=(planet)=>{
    this.setState({
        planet,
        spinner:false
    }) 
  }

  getPhoto(url){
    const photo= fetch(url)
    photo.then((data)=>{
      if(data.status===200){
        this.setState({
          PlanetPhotoURL:data.url
        })
      }else{
        this.setState({
          PlanetPhotoURL:'https://starwars-visualguide.com/assets/img/placeholder.jpg'
        })
      }
    })
  }

  getPlanet(id=1){
    this.swapiServer.getPlanetsById(id).then(
      this.PlanetLoaded,
      this.getPhoto(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`))
    }

  startInterval=()=>{
    if(this.state.interval===false){this.setState({
      interval:true
    })
    this.random=setInterval(() => {
      let rnum=Math.floor(Math.random()*20+1)
      this.getPlanet(rnum)
    }, 3000);}
    else{
      alert('Вы не можете начать рандомайзер если он уже включен')
    }
  }
  
  finishInterval=()=>{
    this.setState({
      interval:false
    })
    clearInterval(this.random)
  }

  componentDidMount(){
    this.getPlanet()
    setTimeout(this.startInterval(), 2000)
  }




  render() {
    const {spinner}=this.state

    const loading= spinner? <Spinner />:<RandomPlanetCard planet={this.state.planet} state={this.state}/>
    
    return (
      <div className='PlanetWrapper'>
      <div className="random-planet">
        {loading}
      </div>
      <StopIntervalButton stop={this.finishInterval} start={this.startInterval}/>
      </div>

    );
  }
}

const RandomPlanetCard=({planet, state})=>{
  const photo=state.PlanetPhotoURL
  const {id,climate,diameter,name,numberDays,population,url}=planet
  return(
    <React.Fragment>
      <img className="planet-image"
             src={photo} />
        <div>
          <h4 className="planet-data">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  planet-data">
              <span className="term">Population:</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item  planet-data">
              <span className="term">Number of days in a year:</span>
              <span>{numberDays}</span>
            </li>
            <li className="list-group-item  planet-data">
              <span className="term">Diameter:</span>
              <span>{diameter}</span>
            </li>
            <li className="list-group-item  planet-data">
              <span className="term">Climate:</span>
              <span>{climate}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}


const StopIntervalButton=({stop, start})=>{
  return (
    <React.Fragment>
      <button type="button" className="btn btn-success start-interval" onClick={()=>start()}>Start Random</button>
      <button type="button" className="btn btn-warning stop-interval" onClick={()=>stop()}>Stop Random</button>
    </React.Fragment>
  )
}