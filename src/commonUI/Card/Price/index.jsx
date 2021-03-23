import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Flex from 'common-ui/Flex';

import { Post } from "./styles";
import { Card } from "../styles";

const PriceCard = ({ size, name, price, symbol, items }) => {
  const width = 100/size;
  return (
    <Flex width={`${width}%`} minWidth="400px" maxWidth="24%">
      <Post>
        <Card>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                  <div className="title color-be-int">
                      {name}
                  </div>
                  <div className="price-symbol">
                      {symbol}
                  </div>
                  <div className="price">
                      {price}
                  </div>
              </div>
              <div className="card-body">
                  <ul>
                {items.map(item => <li> <i className="icon-heart color-be-int" /><span>{item}</span></li>)}
                </ul>
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
        </Card>
      </Post>
    </Flex>
  );
};

PriceCard.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  price: PropTypes.string,
  symbol: PropTypes.number,
  items: PropTypes.array,
};

PriceCard.defaultProps = {
  name: null,
  size: 3,
  price: null,
  symbol: '$',
  items: [],
};

export default PriceCard;
