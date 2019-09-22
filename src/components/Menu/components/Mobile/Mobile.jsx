import React from 'react';
import styled from 'styled-components';

import { mobileConstants } from 'shared/constants'
import { useWindowDimensions } from 'shared/hooks';

import { Item, Profile } from '../';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  padding-bottom: 65px;
`;

function Mobile({user}) {
  const {isMobile} = useWindowDimensions();

  return (
    <Container>
      <MobileWrapper>
        <Profile user={user}/>
        <Item
          label={mobileConstants.profile.label}
          icon={mobileConstants.profile.icon}
        />
        <Item
          label={mobileConstants.bookings.label}
          icon={mobileConstants.bookings.icon}
          rotate={315}
        />
        <Item
          label={mobileConstants.payments.label}
          icon={mobileConstants.payments.icon}
        />
        <Item
          label={mobileConstants.support.label}
          icon={mobileConstants.support.icon}
        />
        <Item
          label={mobileConstants.contactUs.label}
          icon={mobileConstants.contactUs.icon}
        />
        <Item
          label={mobileConstants.logout.label}
          icon={mobileConstants.logout.icon}
        />
        <Item
          label={mobileConstants.aboutUs.label(isMobile)}
          icon={mobileConstants.aboutUs.icon}
        />
        <Item
          label={mobileConstants.faq.label}
          icon={mobileConstants.faq.icon}
          withoutBorder
        />
      </MobileWrapper>
    </Container>
  );
}

export { Mobile };
