import React from 'react'
import './styles.scss'
import SectionHead from '../../global/sectionHead'
import Share from '../Share'


class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            share: false
        }
        this.backgroundId = "popinBackground"
        this.closeId = "popinClose"
    }

    componentWillUnmount() {
        if(this.state.share) {
            this.togglePopin()
        }
    }

    togglePopin = (event) => {
        let targetItem = event.target.id
        if(this.state.share) {
            if(targetItem === this.backgroundId || targetItem === this.closeId) {
                this.setState({
                    share: !this.state.share
                })
            }
        } else {
            this.setState({
                share: !this.state.share
            })
        }
    }

    render() {
        
        return(
            <div className="Content">
                <SectionHead title={this.props.title} subtitle={this.props.subtitle} />
                {
                    this.props.paragraphs.map((paragraph, key) => (
                        <div key={key} className="Content__paragraph">
                            <h3>{paragraph.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: paragraph.text}}></p>
                        </div>
                    ))
                }
                { this.props.share && (
                    <div>
                        <button className="Button" onClick={this.togglePopin}>Partager</button>
                        { this.state.share && <Share id={this.backgroundId} closeId={this.closeId} title={this.props.title} subtitle={this.props.subtitle} image={this.props.image} closePopin={this.togglePopin} /> }
                    </div>
                ) }
            </div>
        )
    }
}

export default Content