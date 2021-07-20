
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'



export class Filter extends Component {
    filterd=(e)=>{
        let val = e.target.value;
        console.log(val);
        let alldata={}
        if(val!=='all'){
            alldata=this.props.jsondata.filter(a=>
            { if(a.horns == val){
                console.log('val'+a);
                return a
            }
               })
        }
        else
        alldata=this.props.jsondata;
        this.props.filterfun(alldata)
        console.log(alldata);
 
     }

    render() {
        return (
            <>
                <Form style={{textAlign:"center", marginTop:'10vh'}}>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label >Select the number of horns</Form.Label>
                        
                        <Form.Control style={{marginLeft:'5vh'}} as="select" custom name='hornsNum' onChange={this.filterd}>
                            <option value='all'>All</option>
                            <option value='1 '>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                        
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default Filter

