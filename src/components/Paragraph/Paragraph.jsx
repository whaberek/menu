import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.p`
  max-width: 300px;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.white};
`;

const Paragraph = ({ text }) => <Container>{text}</Container>;

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Paragraph };
