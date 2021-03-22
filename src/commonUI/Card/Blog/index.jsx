import React from "react";
import PropTypes from "prop-types";
import { Col } from "common-ui/Grid";

import { Post } from "./styles";
import { Card } from "../styles";

const BlogPost = ({ name, summary, size, cover }) => {
  return (
    <Col lg={size}>
      <Post>
        <Card>
          <div className="card-container">
            <div className="card">
              <img src={cover} alt="Image" className="card-img" />
              <div className="card-body">
                <p className="title">{name}</p>
                <p className="description">{summary}</p>
              </div>
            </div>
          </div>
        </Card>
      </Post>
    </Col>
  );
};

BlogPost.propTypes = {
  name: PropTypes.string,
  summary: PropTypes.string,
  size: PropTypes.number,
  cover: PropTypes.string,
};

BlogPost.defaultProps = {
  name: null,
  summary: null,
  size: 4,
  cover: null,
};

export default BlogPost;
