import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MenuContext } from 'store/contexts';
import { colors } from 'shared/variables';
import { useWindowDimensions } from 'shared/hooks';

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${colors.softRed};
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 100px);
  height: 60px;
  border-bottom: ${({ isMobile }) => (
    isMobile
      ? `1px solid ${colors.white}`
      : `2px solid ${colors.white}`
  )};
`;

const CrossContainer = styled.div`
    position: absolute;
    padding: 21px;
    right: 29px;
    cursor: pointer;
`;

function Header() {
  const [, setToggle] = useContext(MenuContext);

  const { isMobile } = useWindowDimensions();

  const handleClick = () => setToggle(false);

  return (
    <Container isMobile={isMobile}>
      <HeaderWrapper isMobile={isMobile}>
        <img alt="Awaymo logo" src={require('assets/logo.svg')}/>
        <CrossContainer onClick={handleClick}>
          <FontAwesomeIcon icon={faTimes} color={colors.white} />
        </CrossContainer>
      </HeaderWrapper>
    </Container>
  );
}

Container.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

HeaderWrapper.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

CrossContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { Header };
