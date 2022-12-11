import styled from 'styled-components';
import { device } from 'Theme/deviceMedia';

export const StyledImg = styled('img')`
  @media screen and (${device.mobile}) {
    max-width: 200px;
  }
  @media screen and (${device.tablet}) {
    max-width: 220px;
  }
  @media screen and (${device.laptop}) {
    max-width: 320px;
  }

  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.space[3]}px;
`;
