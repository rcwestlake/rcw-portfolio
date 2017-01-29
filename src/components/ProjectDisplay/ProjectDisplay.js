import React, { Component, PropTypes }            from 'react'
import { iconSlide, slideHorizontally, showText } from '../../helpers/animations'
import ProjectDetail                              from '../ProjectDetail/ProjectDetail.js'
import ExpandIcon                                 from '../ExpandIcon/ExpandIcon.js'
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
    const icon = this.one
    const image = this.two
    const text = this.three

    iconSlide(icon)
    slideHorizontally(image, 2, 100, 0.5)
    showText(text, 2, 1)
  }

  handleClick = () => {
    this.setState({
      readMore: !this.state.readMore,
    })
  }

  render() {
    const { title, description, imgSource, altText,
            liveLink, gitHubLink, tools, focus = [],
            detail, readMore,
          } = this.state

    const focusList = focus.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    const readMoreText = readMore ? 'Hide detail' : 'Read more...'
    return (
      <section className="project-container">
        <section className="image-container">
          <img
            src={`${imgSource}`}
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
          {detail
            ?
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
                {readMoreText}
              </p>
            </div>
            : ''}
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
  liveLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  focus: PropTypes.array.isRequired,
  detail: PropTypes.array,
}

export default ProjectDisplay
