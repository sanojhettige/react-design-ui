import React from "react";
import PropTypes from "prop-types";
import Flex from 'common-ui/Flex';

import { Post } from "./styles";
import { Card } from "../styles";

const BlogPost = ({ name, summary, size, cover }) => {
  const width = 100/size;
  return (
    <Flex width={`${width}%`} minWidth="300px" maxWidth="50%">
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
    </Flex>
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
