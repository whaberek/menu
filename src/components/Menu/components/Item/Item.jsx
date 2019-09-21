import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { useWindowDimensions } from 'shared/hooks';
import { colors } from 'shared/variables';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${({isMobile, withoutBorder}) => (
    isMobile && !withoutBorder && `1px solid ${colors.opacityWhite}`
  )};
  padding: ${({isMobile}) => (isMobile && '15px 0')};
`;

const Label = styled.p`
  font-weight: 700;
  font-size: 1.2em;
  margin: 0;
  color: ${colors.white};
`;

const IconContainer = styled.div`
  margin-right: 10px;
  transform: ${({rotate}) => (rotate && `rotate(${rotate}deg)`)};
`;

function Item({label, icon, rotate, withoutBorder}) {
  const {isMobile} = useWindowDimensions();

  return (
    <Container isMobile={isMobile} withoutBorder={withoutBorder}>
      {
        (isMobile && icon) && (
          <IconContainer rotate={rotate}>
            <FontAwesomeIcon icon={icon} color={colors.white}/>
          </IconContainer>
        )
      }
      <Label>{label}</Label>
    </Container>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
  rotate: PropTypes.number,
  withoutBorder: PropTypes.bool,
};

Container.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export { Item };
