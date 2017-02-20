import React, { Component, PropTypes } from 'react'
import { slideHorizontally, showText } from '../../helpers/animations.js'
import ProjectDetail                   from '../ProjectDetail/ProjectDetail.js'
import ExpandIcon                      from '../ExpandIcon/ExpandIcon.js'
import weathrly                        from './images/weather-app-min.png'
import githubNotetaker                 from './images/GithubNotes-min.png'
import chatterbox                      from './images/chatterbox-min.png'
import fareharbor                      from './images/fareharbor-min.png'
import pennyWise                       from './images/PennyWise-min.png'
import twenty48                        from './images/2048-min.png'
import toDoBox                         from './images/2DoBox-min.png'
import pollr                           from './images/pollr-min.png'
import dockjs                          from './images/dock_js-min.png'
import './project-display.scss'

class ProjectDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props,
      readMore: false,
    }
  }

  componentDidMount() {
    const image = this.two
    const text = this.three

    slideHorizontally(image, 2, 100, 0.5)
    showText(text, 2, 1)
  }

  handleClick = () => {
    this.setState({
      readMore: !this.state.readMore,
    })
  }

  getImgSource = () => {
    const { imgSource } = this.state

    switch (imgSource) {
      case 'pollr':
        return pollr
      case 'weathrly':
        return weathrly
      case 'chatterbox':
        return chatterbox
      case 'githubNotetaker':
        return githubNotetaker
      case 'fareharbor':
        return fareharbor
      case 'pennyWise':
        return pennyWise
      case '2048':
        return twenty48
      case '2DoBox':
        return toDoBox
      case 'dockjs':
        return dockjs
      default:
        console.error('no imgSource specified in ProjectDisplay.js');
    }
  }

  getExpandIcon = () => {
    const { detail, readMore } = this.state
    if(detail) {
      return (
        <div>
          <ExpandIcon
            currentState={readMore}
            handleClick={this.handleClick}
            styleClass="displayCenter"
          />
          <p
            className="read-more-text"
            onClick={this.handleClick}
          >
            {this.getReadMoreText()}
          </p>
        </div>
      )
    }
  }

  getReadMoreText = () => {
    if(this.state.readMore) return <span>Hide detail...</span>

    return <span>Read more...</span>
  }

  render() {
    const { title, description, altText,
            liveLink, gitHubLink, tools, focus = [],
            detail, readMore,
          } = this.state

    const focusList = focus.map((item, index) => {
      return <li key={index}>{item}</li>
    })

    return (
      <section className="project-container">
        <section className="image-container">
          <img
            src={`${this.getImgSource()}`}
            alt={`${altText}`}
            ref={(i) => { this.two = i }}
          />
        </section>
        <section ref={(i) => { this.three = i }}>
          <h4 className="project-title">{title}</h4>
          <p className="project-description">{description}</p>
          <section className="links-container">
            {!!liveLink && <p>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
            </p>}
            <p>
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github/Code
              </a>
            </p>
          </section>
          <div className="content-container">
            <section className="tools-container">
              <h5 className="sub-header">
                Technologies
              </h5>
              <p>
                {tools}
              </p>
            </section>
            <section className="focus-container">
              <h5 className="sub-header">
                Focus
              </h5>
              <ul>
                {focusList}
              </ul>
            </section>
          </div>
        </section>
        <section>
          {this.getExpandIcon()}
          {!!readMore && <ProjectDetail detail={detail} />}
        </section>
        <hr className="project-divider" />
      </section>
    )
  }
}

ProjectDisplay.propTypes = {
  imgSource: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  gitHubLink: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  focus: PropTypes.array.isRequired,
  detail: PropTypes.array,
}

export default ProjectDisplay
