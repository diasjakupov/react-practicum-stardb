import React from 'react'


class CardList extends React.Component{
    renderItems(label, data){
        return data.map((item, index)=>{
            const data=this.props.renderItem(item)
            return(
            <div className="" key={index} >
            <li className="list-group-item item" onClick={()=>this.props.onItemSelected(data.url, label, data.fields)}>
            {data.name}
            </li>
            <div className='data-item-little'>
                
            </div>
            </div>
            )
        }) 
    }

    render(){
        const {label}=this.props
        const {data}=this.props
        return(
                <ul className="list-group col-sm tb">
                <h3 className="text-white">The most popular <br />{label}</h3>
                {
                this.renderItems(label, data)  
                }
                </ul>  
        )
    }
}

export default CardList

