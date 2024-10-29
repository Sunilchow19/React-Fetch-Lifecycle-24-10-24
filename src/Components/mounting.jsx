import { Component } from "react";
import Main from "./main";


class M extends Component{
    constructor(props){
        super(props)
        this.state={
            a:1
        }
        console.log(this.props);
        
    }

    static getDerivedStateFromProps(props,s){
        console.log(props,s);

        if(props.a==s.a){
            return(
                {a:2}
            )
          }else{
              return (
                {a:null}
              )
          }
      
        
    }

    render(){
        return (
            <>
            
            <h2>Hello this is Mount {this.state.a}</h2>

            </>
        )
    }

    // componentDidMount(p,s){

    //     console.log("Mounting component");


        

    // }
}


export default M