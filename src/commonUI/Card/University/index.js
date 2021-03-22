import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "common-ui/Grid";
import LikeButton from "common-ui/Button/LikeButton";

import { Post } from "./styles";
import { Card } from "../styles";

const UniversityCard = ({ name, programCount, size, cover, logo }) => {
  return (
    <Col lg={size}>
      <Post>
        <Card>
          <div className="card-container">
            <div className="card">
              <div
                className="image"
                style={{
                  backgroundImage: `url("${cover}")`,
                }}
              >
                <LikeButton />
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
      </Post>
    </Col>
  );
};

UniversityCard.propTypes = {
  name: PropTypes.string,
  programCount: PropTypes.string,
  size: PropTypes.number,
  cover: PropTypes.string,
  logo: PropTypes.string,
};

UniversityCard.defaultProps = {
  name: null,
  programCount: null,
  size: 3,
  cover: null,
  logo: null,
};

export default UniversityCard;
