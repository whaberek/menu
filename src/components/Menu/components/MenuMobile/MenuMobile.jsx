import React, { useContext } from 'react';

import { Container, Header } from '../../components';
import { MenuContext } from '../../../../store/contexts';


function MenuMobile() {
  const [toggle] = useContext(MenuContext);

  return (
    <Container toggle={toggle}>
      <Header />
    </Container>
  )
}

export { MenuMobile };

