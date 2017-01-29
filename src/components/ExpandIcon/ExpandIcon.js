import React from 'react'
import './expand-icon.scss'

const ExpandIcon = ({ currentState, handleClick }) => {
  const cName = currentState ? 'close' : 'expand'
  return (
    <div
      alt="Icon to show/hide text"
      className={`${cName} expand-button`}
      onClick={handleClick}
    />
  );
}

export default ExpandIcon;
