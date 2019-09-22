import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Button, Menu, Paragraph } from 'components';

import { homeConstants } from 'shared/constants';
import { MenuContext } from 'store/contexts';

const Container = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.veryDarkGrayishBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.white};
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({toggle}) => (toggle ? 'hidden' : 'auto')};
  }
`;

function Home() {
  const [toggle, setToggle] = useContext(MenuContext);

  const handleClick = () => setToggle(true);

  return (
    <>
      <GlobalStyle toggle={toggle}/>
      <Container>
        <Button
          onClick={handleClick}
          label={homeConstants.menu}
        />
        <Paragraph text={homeConstants.text}/>
      </Container>
      <Menu/>
    </>
  );
}

export { Home };
