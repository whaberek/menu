import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonLayout = styled.button`
  margin-top: 30px;
  padding: 10px 15px;
`;

const Button = ({ label, onClick }) => (
  <ButtonLayout type="button" onClick={onClick}>{label}</ButtonLayout>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { Button };
