import React from 'react'
import ApiManager from '../../services/swapi'


const SomeDetails=(View)=>{
    return class extends React.Component{
        swapiServer=new ApiManager()

        state={
            itemData:{},
            spinner:true,
            errorStatus:false, 
            PhotoURL:''
        }
    
        onError=(err)=>{
            this.setState({
                errorStatus:true,
                spinner:false
            })
        }
    
        ItemLoaded=(item)=>{
            if(item.hasOwnProperty('planet')){
                this.swapiServer.getItemByURL(item.planet).then((planet)=>{
                    this.setState(({itemData})=>{
                        const PlanetName=planet.name
                        const changedItem=item
                        changedItem.planet=PlanetName
                        return {
                            itemData:changedItem,
                            spinner:false
                        }
                    })
                })
            }else{
                this.setState({
                    itemData:item,
                    spinner:false
                })
            }
        }
    
        getPhoto(url){
            const photo= fetch(url)
            photo.then((data)=>{
              if(data.status===200){
                this.setState({
                  PhotoURL:data.url
                })
              }else{
                this.setState({
                  PhotoURL:'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                })
              }
            })
        }

        getItem(url){
            this.swapiServer.getItemByURL(url).then((data)=>{
                this.ItemLoaded(data)
                const template=/\/([a-z]*\/[0-9]*)\/$/
                const photourl=url.match(template)[1]
                let changedurl=''
                if(photourl.includes('people')){
                    changedurl=photourl.replace('people', 'characters')
                }else{
                    changedurl=photourl
                }
                this.getPhoto(`https://starwars-visualguide.com/assets/img/${changedurl}.jpg`)
            }).catch(this.onError)
        }
    
        componentDidMount(){
            this.getItem("http://swapi.dev/api/people/1/")
        }
        componentDidUpdate(prevProps){
            if(this.props.DataURL!==prevProps.DataURL){
                this.Update()
            }
     
        }
    
        componentDidCatch(){
            this.setState({
                errorStatus:true
            })
        }
    
        Update(){
            const {DataURL}=this.props
            if(!DataURL){
                return;
            }
            this.getItem(DataURL)
        }

        render(){
            console.log(this.state.PhotoURL)
            return(
                <View {...this.props} details={this.state}/>
            )
        }
    }
    
}

export default SomeDetails