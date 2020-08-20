import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

class Visible extends React.Component{
    render(){
        return(
            <App />
        )
    }
}

ReactDOM.render(<Visible />  , document.querySelector('#root'))