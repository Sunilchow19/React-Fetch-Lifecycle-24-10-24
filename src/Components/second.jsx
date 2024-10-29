import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css"

class Fake extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            api:[]
        }
    }

    componentDidMount(){


        fetch("https://dummyjson.com/recipes").then((res)=>{return res.json()})
        .then(res=>{
            this.setState({
                api:res.recipes
            })
        }).catch(err=>{console.log(err);
        })

    }


    render(){

        let data=this.state.api.map((val,ind)=>{
            return (
                <>
               
               <div className="sec_main">
               <Card style={{ width: '18rem' }}>
      <img src={val["image"]} alt="" width={200} />
      <Card.Body>
        <Card.Title>{val["id"]+"."+val["name"]}</Card.Title>
        <Card.Text>
        {"Cuisine:"+val["cuisine"]}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{"Difficulty:"+val["difficulty"]}</ListGroup.Item>
        <ListGroup.Item>{"Serving:"+val["servings"]}</ListGroup.Item>
        <ListGroup.Item>{"Calories:"+val["caloriesPerServing"]}</ListGroup.Item>
      </ListGroup>
    </Card>
               </div>
                
                
                
                </>
            )
        })


        return (
            <>
            <h1 className="second">{data}</h1>
            </>
        )
    }



}

export default Fake


