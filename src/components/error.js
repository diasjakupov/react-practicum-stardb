import React from 'react'

export default class Error extends React.Component{
    render(){
        return(
        <div className="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong> A problem has been occurred while submitting your data.
        </div>
        )
    }

}
