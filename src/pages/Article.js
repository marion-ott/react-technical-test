import React from 'react'
import Content from '../components/Content'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

class Article extends React.Component {
  componentWillMount() {
    nprogress.start()
    fetch('../json/data.json') 
      .then(response => response.json())
      .then(data => {
        let article = data.blog.articles.find(el => {
          return el.slug === this.props.match.params.slug
        })
        this.setState({
          article: article
        })
    })
  }

  componentDidMount () {
    nprogress.done()
  }

  render() {
    // const article = this.state.article
    
    return(
      this.state && (
        <div className="container">
          <Content share={true} title={this.state.article.title} subtitle={this.state.article.subtitle} image={this.state.article.img} paragraphs={this.state.article.paragraphs} />
        </div>
      )
    )
  }
}
export default Article;
