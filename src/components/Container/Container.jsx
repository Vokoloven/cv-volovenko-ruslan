import styled from 'styled-components';

export const Container = styled('div')`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 270px;
  }
  @media screen and (min-width: 768px) {
    max-width: 738px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1410px;
  }
`;
