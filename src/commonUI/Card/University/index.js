import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LikeButton from "common-ui/Button/LikeButton";
import Flex from 'common-ui/Flex';

import { University } from "./styles";
import { Card } from "../styles";


const UniversityCard = ({ name, programCount, size, cover, logo, hideLike}) => {
  const width = 100/size;
  return (
    <Flex width={`${width}%`} minWidth={size === 1 ? '100%': '300px'} maxWidth={size === 1 ? '100%': '50%'}>
      <University>
        <Card>
          <div className="card-container">
            <div className="card">
              <div
                className="image"
                style={{
                  backgroundImage: `url("${cover}")`,
                }}
              >
                {!hideLike && 
                <div className="like-button">
                  <LikeButton />
                </div>
}
                <img src={logo} className="logo" />
              </div>
              <div className="card-body">
                <p className="title">{name}</p>
                <p className="count">{programCount} Programs</p>
                <div className="country-section">
                <i className="icon-spain flag" />
                <span>España</span>
                </div>
              </div>
              <div className="card-footer">
                <div className="link-button">
                  <Link to="/">más información</Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </University>
      </Flex>
  );
};

UniversityCard.propTypes = {
  name: PropTypes.string,
  programCount: PropTypes.string,
  size: PropTypes.number,
  cover: PropTypes.string,
  logo: PropTypes.string,
  hideLike: PropTypes.bool,
};

UniversityCard.defaultProps = {
  name: null,
  programCount: null,
  size: 3,
  cover: null,
  logo: null,
  hideLike: false
};

export default UniversityCard;
