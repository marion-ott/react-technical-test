import React, { Component } from 'react'
import Utilities from '../components/Utilities'
import Info from '../components/Info'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

class Home extends Component {
  componentWillMount () {
    nprogress.start()
    fetch('../json/data.json') 
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
    })
  }

  componentDidMount () {
    nprogress.done()
  }

  render() {    
    return (
      this.state && (
        <div className="Home">
          <Utilities data={this.state.data.services}/>
          <Info data={this.state.data.info}/>
          <Utilities data={this.state.data.tools}/>
        </div>
      )
    )
  }
}

export default Home;
