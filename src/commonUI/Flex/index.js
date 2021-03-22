import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;

  ${({ mt, mr, mb, ml }) => `
    margin-top: ${mt || 0};
    margin-right: ${mr || 0};
    margin-bottom: ${mb || 0};
    margin-left: ${ml || 0};
  `};

  ${({ pt, pr, pb, pl }) => `
    padding-top: ${pt || 0};
    padding-right: ${pr || 0};
    padding-bottom: ${pb || 0};
    padding-left: ${pl || 0};
  `};

  ${({ align, justify, grow, shrink, wrap }) => `
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'flex-start'};
    flex-grow: ${grow || 1};
    flex-shrink: ${shrink || 0};
    flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
  `};

  ${({ width, height, maxWidth, maxHeight, minWidth, minHeight }) => `
    width: ${width || 'auto'};
    height: ${height || 'auto'};
    max-width: ${maxWidth || 'none'};
    max-height: ${maxHeight || 'none'};
    min-width: ${minWidth || 0};
    min-height: ${minHeight || 0};
  `};

  ${({ textAlign }) => `
    text-align: ${textAlign || 'left'};
  `};
`;

function Flex({ children, ...props }) {
  return <FlexContainer {...props}>{children}</FlexContainer>;
}

Flex.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Flex;
