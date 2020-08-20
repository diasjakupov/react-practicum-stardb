import React from 'react'
import ApiManager from '../../../services/swapi'
import Spinner from '../../spinner'
import Error from '../../error'
import SomeDetails from '../../hoc-components/hoc-component-somedetails'

const Data=({field, Person})=>{
    return(
        <li className="list-group-item">
        {field}: {Person[field]}
        </li>
    )
}


class PersonCard extends React.Component{

    swapiServer=new ApiManager()


    render(){
        if(this.props.details.error){
            return <Error />
        }
        const {itemData, spinner,errorStatus, PhotoURL}=this.props.details

        const HasData=!(spinner||errorStatus)
        const {label}=this.props
        const children=this.props.children
        const loading =  spinner ? <Spinner />:null
        const person = HasData ? <PersonView Person={itemData} photo={PhotoURL} Itemlabel={label} children={children}/>:null
        const errorindicate= errorStatus ? <Error />:null
        return(
            <div className="dataContainer">
                {loading}
                {errorindicate}
                {person}
            </div>
        )
    }

}


const PersonView=({Person, Itemlabel, children, photo})=>{
    const label=Itemlabel

    return(
    <React.Fragment>
        <div className="person-details card">
        <img className="person-image"
          src={photo}/>
        <div className="card-body">
          <ul className="list-group list-group-flush">
          {React.Children.map(children, (child)=>{
                    return React.cloneElement(child, {Person})
            })
        }
          </ul>
        </div>
      </div>
        
    </React.Fragment>
    )
}

export default SomeDetails(PersonCard)


export{
    Data
}

