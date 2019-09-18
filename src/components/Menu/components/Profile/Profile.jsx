import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'shared/variables';
import { useWindowDimensions } from 'shared/hooks';

import { profileConstants } from './profileConstants';

const Container = styled.div`
  width: ${({isMobile}) => (isMobile ? '100%' : 'fit-content')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({isMobile}) => (isMobile ? 'column' : 'row')};
  margin: 10px;
  padding: 10px 0;
  border-bottom: ${({isMobile}) => (isMobile ? 'none' : `1px solid ${colors.white}`)};
`;

const PictureContainer = styled.div`
  background: ${colors.white};
  border-radius: 50%;
  margin-right: ${({isMobile}) => (!isMobile && '15px')};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
function Profile() {
  const {isMobile} = useWindowDimensions();

  const user = {
    firstName: 'Dominik',
    lastName: 'Biel',
    balance: '1,500.00', // It depends on what will from BE - this form easy formatting
  };

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
