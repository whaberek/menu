import React, { useContext } from 'react';
import styled from 'styled-components';

import { Button, Menu, Paragraph } from 'components'

import { homeConstants } from 'shared/constants'
import { MenuContext } from 'store/contexts'

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function Home() {
  const [toggle, setToggle] = useContext(MenuContext);

  const toggleMenu = () => setToggle(!toggle);

  return (
    <>
      <Container>
        <Button
          onClick={() => toggleMenu()}
          label={homeConstants.menu}
        />
        <Paragraph>{homeConstants.text}</Paragraph>
      </Container>
     <Menu />
    </>
  )
}

export { Home };
