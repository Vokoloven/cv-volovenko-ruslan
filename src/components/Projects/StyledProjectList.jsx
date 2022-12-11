import styled from 'styled-components';
import colors from 'Theme/colors';

export const StyledProjectListDay = styled('div')`
  max-width: 600px;

  margin-top: ${p => p.theme.space[4]}px;

  :not(:last-child) {
    padding-bottom: ${p => p.theme.space[4]}px;
    border-bottom: 2px solid ${colors.body};
  }
`;

export const StyledProjectListNight = styled('div')`
  max-width: 600px;

  margin-top: ${p => p.theme.space[4]}px;

  :not(:last-child) {
    padding-bottom: ${p => p.theme.space[4]}px;
    border-bottom: 2px solid ${colors.eliphant};
  }
`;
