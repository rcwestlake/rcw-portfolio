import React, { PropTypes } from 'react';

const LinkList = ({ cName, header, items }) => {
  return (
    <div>
      <h4 className={cName}>{header}</h4>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <a
                href={item[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item[1]}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

LinkList.propTypes = {
  cName: PropTypes.string,
  header: PropTypes.string,
  items: PropTypes.array
}

export default LinkList;
