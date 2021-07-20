import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export class HornedBeast extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            numOfvote :0,
        }
    }
    funOfVote=()=>{
        console.log('hi');
       
       this.setState({
           numOfvote:this.state.numOfvote +1 ,      
       })    
    }
    
    modalfun=()=>{
        this.props.modal({
            title:this.props.title,
            description:this.props.description,
            img_url:this.props.imageUrl
        })
    }
    render() {
        return (
            <>
                <Card style={{ width: '20rem' }}>
                    <Card.Img onClick={this.props.total} style={{ width: '10rem' }}  variant="top" src={this.props.imageUrl}  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        👜 {this.state.numOfvote}
                        </Card.Text>
                        <Button onClick={this.modalfun} variant="primary">modal</Button>
                        <Button onClick={this.funOfVote} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeast
