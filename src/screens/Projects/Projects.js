import React, { Component } from 'react'
import ProjectDisplay       from '../../components/ProjectDisplay/ProjectDisplay.js'
import { slideUpAnimation } from '../../helpers/animations'
import ProjectData          from './projects-data.js'

class Projects extends Component {
  componentDidMount() {
    const content = this.one

    slideUpAnimation(content, 3)
  }

  render() {
    const projects = Projects.map((project, index) => {
      return (
        <ProjectDisplay
          key={index}
          title={project.title}
          imgSource={project.imgSource}
          altText={project.altText}
          description={project.description}
          tools={project.tools}
          focus={project.focus}
          liveLink={project.liveLink}
          gitHubLink={project.gitHubLink}
          detail={project.detail}
        />
      )
    })
    return (
      <div
        className="projects-container"
        ref={(i) => { this.one = i }}
      >
        {projects}
      </div>
    )
  }
}

export default Projects
