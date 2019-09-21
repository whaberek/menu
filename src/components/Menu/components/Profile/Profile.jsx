import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'shared/variables';
import { useWindowDimensions } from 'shared/hooks';

import { profileConstants } from './profileConstants';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({isMobile}) => (isMobile ? 'center' : 'flex-start')};;
  align-items: center;
  flex-direction: ${({isMobile}) => (isMobile ? 'column' : 'row')};
  margin-bottom: 5px;
  padding: 10px 0;
  border-bottom: ${({isMobile}) => (!isMobile && `1px solid ${colors.opacityWhite}`)};
`;

const PictureContainer = styled.div`
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  border-radius: 50%;
  margin-right: ${({isMobile}) => (!isMobile && '15px')};
  margin-left: ${({isMobile}) => (!isMobile && '4px')};
  
  ${({isMobile}) => !isMobile && `
    &:before {
        content: '';
        position: absolute;
        left: -4px;
        top: -4px;
        width: 44px;
        height: 44px;
        border: 2px solid ${colors.white};
        border-radius: 50%;
    }`
} 
`;

const Picture = styled.img`
  width: 30px;
  height: 30px;
`;

const TextContainer = styled.div`
  text-align: ${({isMobile}) => (isMobile ? 'center' : 'left')};
`;

const Text = styled.p`
  font-weight: ${({isMobile}) => (isMobile ? 600 : 900)};
  color: ${colors.white};
  margin: 0;
`;

// TODO: Add circle around picture container
function Profile({user}) {
  const {isMobile} = useWindowDimensions();

  const nameLabel = isMobile ? user.firstName : `${user.firstName} ${user.lastName}`;
  const balanceLabel = isMobile ? profileConstants.label : profileConstants.available;

  return (
    <Container isMobile={isMobile}>
      <PictureContainer isMobile={isMobile}>
        <Picture alt="User avatar" src={require('assets/avatar.png')}/>
      </PictureContainer>
      <TextContainer isMobile={isMobile}>
        <Text isMobile={isMobile}>{nameLabel}</Text>
        {
          isMobile
            ? (
              <>
                <Text isMobile={isMobile}>{balanceLabel}</Text>
                <Text isMobile={isMobile}>{`£${user.balance}`}</Text>
              </>
            )
            : <Text isMobile={isMobile}>{`£${user.balance} ${balanceLabel}`}</Text>
        }
      </TextContainer>
    </Container>
  );
}

Container.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

PictureContainer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

TextContainer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

Text.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export { Profile };
