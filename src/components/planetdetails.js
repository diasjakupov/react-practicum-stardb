import React from 'react'

export default class PlanetCard extends React.Component{
    render(){
        return(
            <div class="media text-primary ">
            <div className='ImageField'>
                <img src="https://il.tpu.ru/static/assets/thumbnail/539e172312d3f9f614f4ea39c9739ed1/2372b8fa382d7c64/c0a6935f77a91716.jpg" class="planetImage" alt="..." />
            </div>
            <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <ul className="list-group list-group-flush card-part">
                <li className="list-group-item card-part br-white">Популяция:</li>
                <li className="list-group-item card-part br-white">Расположение:</li>
                <li className="list-group-item card-part br-white">Планета:</li>
            </ul>
            </div>
            </div>
        )
    }
}