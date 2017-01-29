import React from 'react';

const ExpandIcon = ({ currentState, handleClick }) => {
  const img = currentState ? 'add-icon.png' : 'close-icon.png'
  return (
    <img
      src={img}
      alt="Icon to show/hide text"
      className="expand-button"
      onClick={handleClick}
    />
  );
}

export default ExpandIcon;
