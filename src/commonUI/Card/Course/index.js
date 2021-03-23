import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Flex from 'common-ui/Flex';
import LikeButton from "common-ui/Button/LikeButton";
import FavoriteButton from "common-ui/Button/FavoriteButton";

import { Post } from "./styles";
import { Card } from "../styles";

const CourseCard = ({
  name,
  universityName,
  type,
  size,
  cover,
  logo,
  startDate,
  cost,
  courseCategory,
  period,
  courseType,
}) => {
  const width = 100/size;
  return (
    <Flex width={`${width}%`} minWidth="300px" maxWidth="50%">
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
                <div className="buttons">
                  <div className="favorite">
                    <FavoriteButton className="fav-button" />
                  </div>
                  <div className="like">
                    <LikeButton className="like-button" />
                  </div>
                </div>
                <img src={logo} className="logo" />
              </div>
              <div className="card-body">
                <p className="title">{name}</p>
                <span className="uni-name">{universityName}</span>
                <span className="course_type">{type}</span>

                <div className="country-section">
                  <i className="icon-spain flag" />
                  <span>España</span>
                </div>
              </div>
              <div className="card-footer">
                <div className="other-tags">
                  <span className="category">{courseCategory}</span>
                  <span className="period">{period}</span>
                  <span className="course-type">{courseType}</span>
                </div>
                <div className="footer-bottom">
                  <span className="start_date">
                    <span className="sub-title">Fecha de Inicio</span>
                    <span>{startDate}</span>
                  </span>
                  <span className="price">
                    <span className="sub-title">Precio</span>
                    <span>{cost}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Post>
    </Flex>
  );
};

CourseCard.propTypes = {
  name: PropTypes.string,
  universityName: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  cover: PropTypes.string,
  logo: PropTypes.string,
  startDate: PropTypes.string,
  cost: PropTypes.string,
  courseCategory: PropTypes.string,
  period: PropTypes.string,
  courseType: PropTypes.string,
};

CourseCard.defaultProps = {
  name: null,
  universityName: null,
  type: null,
  size: 3,
  cover: null,
  logo: null,
  startDate: null,
  cost: 0,
  courseCategory: null,
  period: null,
  courseType: null,
};

export default CourseCard;
