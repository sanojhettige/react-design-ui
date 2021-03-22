import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "common-ui/Grid";

import { TitleContainer } from "./styles";

const TitleBar = ({ title, subtitle }) => {
  return (
    <TitleContainer>
      <Row justifyContent="center">
        <Col className="head-title">{title}</Col>
      </Row>
      <Row justifyContent="center">
        <Col className="sub-title">{subtitle}</Col>
      </Row>
    </TitleContainer>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

TitleBar.defaultProps = {
  title: null,
  subtitle: null,
};

export default TitleBar;
