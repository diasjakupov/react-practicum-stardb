import React from 'react'
import ApiManager from '../../services/swapi'

import Error from '../error'

const Data=(View, getData)=>{
    return class extends React.Component{
        swapiServer=new ApiManager()

        state={
            Data:[],
            error:false
        }

        componentDidMount(){
            getData().then((data)=>{
                const res = data.results
                this.setState(({Data})=>{
                    return {
                        Data:res
                    }
                })
               
            })
        }

        componentDidCatch(){
            this.setState({error:true})
        }

    render(){
        if(this.state.error){
            return <Error />
        }
        return <View {...this.props} data={this.state.Data}/>
    }
    }
}



export {Data}
