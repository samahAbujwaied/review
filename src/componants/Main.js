import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import SelectedBeast from './SelectedBeast'
export class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            total:100,
            alldata:{},
            show:false
        }
    }
    sumoftotal=()=>{
        this.setState({
            total:this.state.total -1 
        })
    }

    datamodal=(data)=>{
        this.setState({
         alldata:data,
         show:true

        })
    }
    handelclose=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <>
            <h1>{this.state.total}</h1>     
                {
                    this.props.jsondata.map(item=>{

                       return <HornedBeast
                        title={item.title}
                        imageUrl={item.image_url} 
                        description={item.description}
                        total={this.sumoftotal}
                        modal={this.datamodal}/>
                        
                        
                    })
                }
            <SelectedBeast close={this.handelclose} alldata={this.state.alldata} show={this.state.show}  />
            </>
        )
    }
}

export default Main
