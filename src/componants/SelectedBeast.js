import React, { Component } from 'react'
import { Card,Modal, Button } from 'react-bootstrap'

export class SelectedBeast extends Component {
    render() {
        return (
            <>
               <Modal show={this.props.show}  >
                    <Modal.Header>
                        <Modal.Title style={{ alignItems: 'center' }}>{this.props.alldata.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Card style={{ width: "80%", height: "100%",marginLeft: "7vh" }} bg={'warning'}>
                            <Card.Img width={200}
                                height={280}  src={this.props.alldata.img_url} alt={this.props.title} />
                            <Card.Body>

                                <Card.Text>
                                    {this.props.alldata.description}
                                </Card.Text>
                            </Card.Body>




                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="secondary" onClick={this.props.close}>
                            Close
          </Button>
                        
                    </Modal.Footer>
                </Modal> 
            </>
        )
    }
}

export default SelectedBeast
