import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MenuContext } from 'store/contexts';
import { colors } from 'shared/variables';
import { useWindowDimensions } from 'shared/hooks';

const logo = require('assets/logo.svg');

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 100px);
  height: 60px;
  border-bottom: ${({ isMobile }) => (
    isMobile
      ? `2px solid ${colors.white}`
      : `1px solid ${colors.white}`
  )};
`;

const Image = styled.img``;

const CrossContainer = styled.div`
    position: absolute;
    padding: 21px;
    right: 29px;
    cursor: pointer;
`;

function Header() {
  const [, setToggle] = useContext(MenuContext);

  const { isMobile } = useWindowDimensions();

  const toggleMenu = () => setToggle(false);

  return (
    <Container>
      <HeaderContainer isMobile={isMobile}>
        <Image alt="Awaymo logo" src={logo}/>
        <CrossContainer onClick={() => toggleMenu()}>
          <FontAwesomeIcon icon={faTimes} color={colors.white} />
        </CrossContainer>
      </HeaderContainer>
    </Container>
  );
}

export { Header };
