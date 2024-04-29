import React from 'react'

class Classcomp extends React.Component {
    constructor(){
        super()
        console.log("constructer called");
        
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }
    increment(){
        this.setState({count : this.state.count + 1})
    }
    render(){
        console.log("render");
        // this.state = {
        //     life : "lifecycle from this.state"
        // }

        // console.log(this.state);
        return(
            <div>
                {/* <h2>count {this.state.count}</h2> */}
                {/* <button onClick={increament()}>Click</button> */}
                {/* <button onClick={this.increament}>Click</button> */}

                {/* we have 2 ways to call a function  */}
                <button onClick={this.increment.bind(this)}>Click</button>

                {/* <button onClick={()=> {this.increment()}}>Click</button> */}

            </div>
        )
    }
}

export default Classcomp