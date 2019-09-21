import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { desktopConstants } from 'shared/constants'

import { Item, Profile } from '../';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 75px;
`;

const DesktopWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: calc(100% - 100px);
`;

const Column = styled.div`
  width: ${({size}) => (size)};
`;

function Desktop({user}) {
  return (
    <Container>
      <DesktopWrapper>
        <Column size="200px">
          <Item label={desktopConstants.home.label} />
          <Item label={desktopConstants.flights.label} />
          <br/>
          <Item label={desktopConstants.aboutUs.label()} />
          <Item label={desktopConstants.faq.label} />
          <Item label={desktopConstants.support.label} />
          <Item label={desktopConstants.contactUs.label} />
        </Column>
        <Column size="50%">
          <Profile user={user}/>
          <Item label={desktopConstants.profile.label} />
          <Item label={desktopConstants.bookings.label} />
          <Item label={desktopConstants.payments.label} />
          <Item label={desktopConstants.logout.label} />
          <Item label={desktopConstants.resumeApp.label} />
        </Column>
      </DesktopWrapper>
    </Container>
  );
}

Column.propTypes = {
  size: PropTypes.string,
};

export { Desktop };
