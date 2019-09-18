import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

import { Button, Menu, Paragraph } from 'components';

import { homeConstants } from 'shared/constants';
import { MenuContext } from 'store/contexts';

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
  const [, setToggle] = useContext(MenuContext);

  const handleClick = useCallback(() => {
    setToggle(true)
  }, [setToggle]);

  return (
    <>
      <Container>
        <Button
          onClick={handleClick}
          label={homeConstants.menu}
        />
        <Paragraph text={homeConstants.text} />
      </Container>
      <Menu />
    </>
  );
}

export { Home };
