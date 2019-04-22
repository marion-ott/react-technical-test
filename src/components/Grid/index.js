import React from 'react'
import './styles.scss'
import SectionHead from '../../global/sectionHead'
import GridItem from './GridItem'
import { cascadeAppear } from '../../global/helpers'

class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animated: false
        }
        this.articles = []
        this.startAnimation = this.startAnimation.bind(this)
        this.getWindowHeight = this.getWindowHeight.bind(this)
        this.windowHeight = window.innerHeight
    }
    
    componentDidMount() {
        this.startAnimation()
        window.addEventListener('scroll', this.startAnimation)
        window.addEventListener('resize', this.getWindowHeight)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.startAnimation)
        window.removeEventListener('resize', this.getWindowHeight)
    }

    startAnimation = () => {
        if(this.container.getBoundingClientRect().top + 20 < this.windowHeight && !this.state.animated) {
            cascadeAppear(this.articles)
            this.setState({
                animated: true
            })
        }
    }

    getWindowHeight = () => {
        this.windowHeight = window.innerHeight
    }
    render() {
        const { title, subtitle, articles } = this.props.data
        return(
            <div className="Grid container">
                <SectionHead title={title} subtitle={subtitle} />
                <div ref={el => this.container = el} className="Grid__items container">
                    {
                        articles.map((article, key) => (
                            <GridItem ref={el => this.articles.push(el)} key={key} index={key + 1} history={this.props.history} slug={article.slug} title={article.title} text={article.text} image={article.img} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Grid