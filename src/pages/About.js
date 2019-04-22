import React from 'react'
import Content from '../components/Content'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

class About extends React.Component {
  componentWillMount () {
    nprogress.start()
    fetch('../json/data.json') 
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.about
        })
    })
  }

  componentDidMount () {
    nprogress.done()
  }

  render() {
    return(
      this.state && (
        <div className="container">
          <Content share={false} title={this.state.data.title} subtitle={this.state.data.subtitle} paragraphs={this.state.data.paragraphs} />
        </div>
      )
    )
  }
}
export default About;
