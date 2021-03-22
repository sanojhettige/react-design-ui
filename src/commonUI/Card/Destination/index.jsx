import React from "react";
import PropTypes from "prop-types";
import { Col } from "common-ui/Grid";

import { Post } from "./styles";
import { Card } from "../styles";

const DestinationCard = ({ name, size, cover }) => {
  return (
    <Col lg={size}>
      <Post>
        <Card>
          <div className="destination">
            <div
              className="image"
              style={{
                backgroundImage: `url("${cover}")`,
              }}
            >
              <h1 className="title">{name}</h1>
            </div>
          </div>
        </Card>
      </Post>
    </Col>
  );
};

DestinationCard.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  cover: PropTypes.string,
};

DestinationCard.defaultProps = {
  name: null,
  size: 3,
  cover: null,
};

export default DestinationCard;
