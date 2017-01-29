import React, { PropTypes } from 'react';
import './project-detail.scss'

const ProjectDetail = ({ detail = [] }) => {
  const detailHTML = detail.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  })
  return (
    <div className="read-more-content">
      {detailHTML}
    </div>
  )
}

ProjectDetail.propTypes = {
  detail: PropTypes.array
}

export default ProjectDetail
