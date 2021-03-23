import React from "react";
import PropTypes from "prop-types";
import Flex from 'common-ui/Flex';

import { Destination } from "./styles";
import { Card } from "../styles";

const DestinationCard = ({ name, size, cover }) => {
  const width = 100/size;
  return (
    <Flex width={`${width}%`} minWidth="300px" maxWidth="50%">
      <Destination>
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
      </Destination>
    </Flex>
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
