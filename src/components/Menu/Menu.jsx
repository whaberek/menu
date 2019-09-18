import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';

import { Container, Header } from './components';

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
        </Container>
      )}
    </Transition>
  )
}

export { Menu };
