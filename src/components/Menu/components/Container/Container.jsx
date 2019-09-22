import styled from 'styled-components';
import PropTypes from 'prop-types';

import { stateConstants } from './stateConstants';

const Container = styled.div`
  z-index: ${({state}) => (state === stateConstants.exited ? -1 : 0)};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.softRed};
  transition: opacity 500ms ease-out;
  overflow: auto;
  opacity: ${({state}) => {
    switch (state) {
      case stateConstants.entered:
        return 1;
      case stateConstants.entering:
      case stateConstants.exiting:
      case stateConstants.exited:
      default:
        return 0;
    }
  }};
`;

Container.propTypes = {
  state: PropTypes.oneOf(Object.values(stateConstants)).isRequired,
};

export { Container };
