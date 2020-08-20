import React from 'react'
import PersonCard, {Data} from './components/itemcard'
import ApiManager from '../../services/swapi'

import 
{PersonList,
PlanetList,
StarshipList} from './components/itemlists'

export default class SelectedItemSection extends React.Component{

    swapiServer=new ApiManager()


    state={
        URL:'',
        label:'characters',
        field:['name','height','planet','gender'],
    }

    onItemSelected=(url, NewLabel, fields)=>{
        this.setState(({URL, label, field})=>{
            return {
                URL:url,
                label:NewLabel,
                field:fields
            }
        })
    }

    render(){
        return(
            <div className='wrapper WrapperForList'>
                <PersonCard
                DataURL={this.state.URL} 
                label={this.state.label}>
                {this.state.field.map((item)=>(
                    <Data field={item} key={item}/>
                ) 
                )}
        </PersonCard>
            <div className='mylist'>
                <PersonList
                    label="characters"
                onItemSelected={this.onItemSelected}
                renderItem={(item)=>{
                    return {
                        'name':item.name,
                        'url':item.url,
                        'fields':['name','height','planet','gender']
                    }
                }}
                />

                <StarshipList
                    label="starships"
                    onItemSelected={this.onItemSelected}
                    renderItem={(item)=>{
                    return {
                        'name':item.name,
                        'url':item.url,
                        'fields':['name', 'model','cost', 'length','crew']
                    }
                }} 
                />


                <PlanetList
                    label="planets"
                    onItemSelected={this.onItemSelected}
                    renderItem={(item)=>{
                        return {
                            'name':item.name,
                            'url':item.url,
                            'fields':['name','population','diameter','climate', 'numberDays']
                        }
                }}
                />
                </div>

            </div>
        )
    }
}
