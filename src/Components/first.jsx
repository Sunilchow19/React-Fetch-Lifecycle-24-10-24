import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css"

class Dummy extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            api:[]
        }
    }

    componentDidMount(){


        fetch("https://dummyjson.com/products").then((res)=>{return res.json()})
        .then(res=>{
            this.setState({
                api:res.products
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
      <img src={val["images"][0]} alt="" width={200} />
      <Card.Body>
        <Card.Title>{val["id"]+"."+val["title"]}</Card.Title>
        <Card.Text>
        {val["description"]}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{"Brand:"+val["brand"]}</ListGroup.Item>
        <ListGroup.Item>{"Category:"+val["category"]}</ListGroup.Item>
        <ListGroup.Item>{"Price:"+val["price"]}</ListGroup.Item>
        <ListGroup.Item>{"Rating:"+val["rating"]}</ListGroup.Item>

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

export default Dummy


