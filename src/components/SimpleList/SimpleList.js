import React, { PropTypes } from 'react';

const SimpleList = ({ cName, header, items }) => {
  return (
    <div>
      <h4 className={cName}>{header}</h4>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

SimpleList.propTypes = {
  cName: PropTypes.string,
  header: PropTypes.string,
  items: PropTypes.array
}

export default SimpleList;
