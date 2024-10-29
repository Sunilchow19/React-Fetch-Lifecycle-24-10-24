

// import Fake from "./second";
// import Dummy from "./first";
import { Component } from "react";
import M from "./mounting";

class Main extends Component{
    constructor(){
        super()
        this.state={
            value:true
        }
    }

    met=()=>{
        this.setState({
            value:!this.state.value
        })
    }

    render(){
        return (
            <>
            
            {/* <button onClick={this.met} >Click ME :)</button> */}
            {/* {this.state.value ? <Fake/>:<Dummy/>} */}
            

            <M a={1}/>
            </>
        )
    }
}


export default Main