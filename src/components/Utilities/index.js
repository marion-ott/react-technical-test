import React from 'react'
import './styles.scss'
import SectionHead from '../../global/sectionHead'
import UtilityItem from './UtilityItem';
import { cascadeAppear } from '../../global/helpers'

class Utilities extends React.Component {
    constructor(props) {
        super(props)
        this.items = []
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
        if(this.container.getBoundingClientRect().top + 20 < this.windowHeight) {
            cascadeAppear(this.items)
        }
    }

    getWindowHeight = () => {
        this.windowHeight = window.innerHeight
    }

    render() {

        const { title, subtitle, items } = this.props.data
        return(
            <div className="Utilities container">
                <SectionHead title={title} subtitle={subtitle} />
                <div ref={el => this.container = el} className="Utilities__items">
                    {
                        items.map((item, key) => (
                            <UtilityItem ref={el => this.items.push(el)} key={key} title={item.title} paragraph={item.paragraph} icon={item.icon} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Utilities