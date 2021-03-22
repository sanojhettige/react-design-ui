import React from "react";
import PropTypes from "prop-types";
import { Col } from "common-ui/Grid";

import { Counter } from "./styles";

const CounterCard = ({ title, size, count, icon }) => {
  return (
    <Col>
      <Counter>
        <i className={`icon ${icon}`} />
        <span className="count">{count}</span>
        <h1 className="title">{title}</h1>
      </Counter>
    </Col>
  );
};

CounterCard.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  count: PropTypes.string,
  icon: PropTypes.string,
};

CounterCard.defaultProps = {
  title: null,
  size: 3,
  count: null,
  icon: null,
};

export default CounterCard;
