import React, { Component } from 'react'
import Header from './componants/Header'
import Main from './componants/Main'
import Footer from './componants/Footer'
import Filter from './componants/Filter'

import data from './componants/data.json'
export class App extends Component {
  constructor(props){
    super(props);
    this.state={
    filterddata:data,
    }
  }
  
  flterdhornedi=(item)=>{
  this.setState({
    filterddata:item
    
  })
  console.log(this.state.filterddata);
  }
  
  render() 
  { console.log('alldata');
    console.log(this.state.filterddata);
    return (
      <>
      <Header/>
      <Filter jsondata={data} filterfun={this.flterdhornedi}  />
      <Main jsondata={this.state.filterddata} />
      <Footer/>
        
      </>
    )
  }
}

export default App
