import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Article from "./pages/Article"
import About from "./pages/About"
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Social from './components/Social'

class Router extends React.Component {

  componentWillMount() {
    fetch('../json/data.json') 
      .then(response => response.json())
      .then(data => {
        this.setState({
          navigation: data.navigation,
          hero: data.hero,
          contact: data.contact
        })
    })
  }
  render() {
    return(
      this.state && (
        <BrowserRouter>
          <Header navigation={this.state.navigation}/>
          <Hero data={this.state.hero}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Article} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Contact data={this.state.contact}/>
          <Social data={this.state.contact}/>
        </BrowserRouter>
      )
    )
  }
} 

export default Router
