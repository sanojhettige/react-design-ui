import React, { useState } from "react";
import PropTypes from "prop-types";

import { FavoriteButtonontainer } from "./styles";

function FavoriteButton({ isActive, onClick, ...otherProps }) {
  const [like, setLike] = useState(isActive);

  const hanldleClick = () => {
    onClick(!like);
    setLike(!like);
  };
  return (
    <FavoriteButtonontainer>
      <i
        className={`icon-bars ${like ? "active" : "inactive"}`}
        onClick={hanldleClick}
      ></i>
    </FavoriteButtonontainer>
  );
}

FavoriteButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

FavoriteButton.defaultProps = {
  onClick: () => {},
  isActive: false,
};

export default FavoriteButton;
