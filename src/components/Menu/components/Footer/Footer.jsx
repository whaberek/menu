import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { menuConstants } from 'shared/constants';
import { useWindowDimensions } from 'shared/hooks';

const Container = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.softRed};
  z-index: 1;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 100px);
  padding: ${({ isMobile }) => (isMobile ? `15px 0` : '20px 0 50px')};
  border-top:  ${({ theme }) => `1px solid ${theme.opacityWhite}`};
`;

const Label = styled.p`
  font-weight: 400;
  font-size: 1.2em;
  margin: 0;
  color: ${({ theme }) => theme.white};
`;

function Footer() {
  const {isMobile} = useWindowDimensions();

  return (
    <Container>
      <FooterWrapper isMobile={isMobile}>
        <Label>{menuConstants.label}</Label>
        {
          !isMobile && (
            <>
              <Label>{menuConstants.phone}</Label>
              <Label>{menuConstants.email}</Label>
            </>
          )
        }

      </FooterWrapper>
    </Container>
  );
}

FooterWrapper.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export { Footer };
