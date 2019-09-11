import styled from 'styled-components';

import { colors } from 'shared/variables';

const Container = styled.div`
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${colors.softRed};
`;

export { Container };
