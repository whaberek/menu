import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';

import { Container, Header, Profile } from './components';

import { MenuContext } from 'store/contexts';

function Menu() {
  const [toggle] = useContext(MenuContext);

  return (
    <Transition in={toggle} timeout={{
      enter: 0,
      exit: 500,
    }}>
      {state => (
        <Container state={state} toggle={toggle}>
          <Header />
          <Profile />
          {/* TODO: Add menu items from constants(make it reusable) */}
          {/* TODO: Write test for all components using react-testing-library */}
        </Container>
      )}
    </Transition>
  )
}

export { Menu };
