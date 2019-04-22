import React, { Component } from 'react'
import Grid from '../components/Grid'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

class Blog extends Component {
  
  componentWillMount () {
    nprogress.start()
    fetch('../json/data.json') 
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.blog
        })
    })
  }

  componentDidMount () {
    nprogress.done()
  }

  render() {
    
    return (
      this.state && (
        <div className="Blog">
          <Grid data={this.state.data} history={this.props.history}/>
        </div>
      )
    )
  }
}

export default Blog
