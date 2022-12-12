import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLinkButtonDay = styled(NavLink)`
  color: ${p => p.theme.colors.white};
  &.active {
    color: ${p => p.theme.colors.body};
  }
`;

export const StyledNavLinkListDay = styled(NavLink)`
  color: ${p => p.theme.colors.body};
  &.active {
    color: ${p => p.theme.colors.switcher};
  }
`;

export const StyledNavLinkButtonNight = styled(NavLink)`
  color: ${p => p.theme.colors.elephant};
  &.active {
    color: ${p => p.theme.colors.switcher};
  }
`;

export const StyledNavLinkListNight = styled(NavLink)`
  color: ${p => p.theme.colors.elephant};
  &.active {
    color: ${p => p.theme.colors.switcher};
  }
`;
