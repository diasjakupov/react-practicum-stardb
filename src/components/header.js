import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
<div className="header d-flex">
<h3>
  <a href="#/">
    StarDB
  </a>
</h3>
<ul className="d-flex nav-list">
  <li>
    <a href="#/people">People</a>
  </li>
  <li>
    <a href="#/planets">Planets</a>
  </li>
  <li>
    <a href="#/starships">Starships</a>
  </li>
</ul>
</div>

    )
    }
}



