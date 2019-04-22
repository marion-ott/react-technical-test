import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

class GridItem extends React.Component {
    render() {
        return(
            <div className="GridItem">
                <Link to={`/blog/${this.props.slug}`}>
                    <h3 className="GridItem__title">{this.props.title}</h3>
                    <div className="GridItem__thumbnail">
                        <div className="GridItem__thumbnail__img" style={{backgroundImage: `url(${this.props.image})`}}></div>
                    </div>
                    <p>{this.props.text}</p>
                </Link>
            </div>
        )
    }
} 

export default GridItem