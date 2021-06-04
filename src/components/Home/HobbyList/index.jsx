import React from "react";
import PropTypes from "prop-types";
import "./HobbyList.css";

function HobbyList(props) {
  const { hobbyList, activeID, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          className={hobby.id === activeID ? "active" : ""}
          key={hobby.id}
          onClick={() => handleClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  onHobbyClick: PropTypes.func,
  activeID: PropTypes.number,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeID: null,
  onHobbyClick: null,
};

export default HobbyList;
