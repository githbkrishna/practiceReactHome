import React, { Component } from 'react'

export default class Classprops extends Component {
  render() {
    return (
      <div>
            {/* if you using class comp then u have to use this.props for calling props. */}
            <h1>React lifecycle from Class</h1>
            <h1>taking (life) key from props</h1>
            <h2>this is <span style={{color:"blue", backgroundColor:"black", padding:"10px"}}>{this.props.life}</span> from props</h2>
      </div>
    )
  }
}