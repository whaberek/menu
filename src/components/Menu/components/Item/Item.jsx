import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { useWindowDimensions } from 'shared/hooks';
import { theme } from 'shared/variables/theme';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${({isMobile, withoutBorder, theme}) => (
    isMobile && !withoutBorder && `1px solid ${theme.opacityWhite}`
  )};
  padding: ${({isMobile}) => (isMobile && '15px 0')};
  margin: ${({isMobile}) => (!isMobile && '5px 0')};
  cursor: pointer;
`;

const Label = styled.p`
  font-weight: 700;
  font-size: ${({isMobile}) => (isMobile ? '1.2em' : '1.6em')};
  margin: 0;
  color: ${({ theme }) => theme.white};
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
            <FontAwesomeIcon icon={icon} color={theme.white}/>
          </IconContainer>
        )
      }
      <Label isMobile={isMobile}>{label}</Label>
    </Container>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
  rotate: PropTypes.number,
  withoutBorder: PropTypes.bool,
};

IconContainer.propTypes = {
  rotate: PropTypes.number,
};

Container.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export { Item };
