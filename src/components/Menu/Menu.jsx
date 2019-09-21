import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';

import { Container, Desktop, Header, Mobile } from './components';

import { MenuContext } from 'store/contexts';
import { useWindowDimensions } from 'shared/hooks';

const user = {
  firstName: 'Dominik',
  lastName: 'Biel',
  balance: '1,500.00', // It depends on what we get from BE - this form easy formatting
};

function Menu() {
  const [toggle] = useContext(MenuContext);

  const {isMobile} = useWindowDimensions();

  return (
    <Transition in={toggle} timeout={{
      enter: 0,
      exit: 500,
    }}>
      {state => (
        <Container state={state}>
          <Header/>
          {
            isMobile
              ? <Mobile user={user} />
              : <Desktop user={user} />
          }
        </Container>
      )}
    </Transition>
  )
}

export { Menu };
