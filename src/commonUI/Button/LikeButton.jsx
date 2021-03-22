import React, { useState } from "react";
import PropTypes from "prop-types";

import { LikeButtonContainer } from "./styles";

function LikeButton({ isActive, onClick, ...otherProps }) {
  const [like, setLike] = useState(isActive);

  const hanldleClick = () => {
    onClick(!like);
    setLike(!like);
  };
  return (
    <LikeButtonContainer>
      <i
        className={`icon-heart ${like ? "active" : "inactive"}`}
        onClick={hanldleClick}
      ></i>
    </LikeButtonContainer>
  );
}

LikeButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

LikeButton.defaultProps = {
  onClick: () => {},
  isActive: false,
};

export default LikeButton;
