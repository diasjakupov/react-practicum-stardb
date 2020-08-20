import React from 'react'

import ApiManager from '../services/swapi'

import Header from './header'
import RandomPlanet from './random-planet'
import Error from './error'
import SelectedItemSection from './selected_item_from_mainpage/selected_item' 



export default class App extends React.Component{
    swapiServer=new ApiManager()

    state={
        error:false
    }


    componentDidCatch(){
        this.setState({
            error:true
        })
    }
    render(){

        if(this.state.error){
            return <Error />
        }
        return(
        <div>
        <Header />
        <RandomPlanet />
        <SelectedItemSection />
        
        
        
        </div>
    )
}
        
}


