import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from 'Theme/MUI/theme';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import { screenStatus } from 'redux/Selectors/screenStatus';
import { ColorSwitches } from 'components/AppBar/Switcher';
import colors from 'Theme/colors';
import { useState, useEffect } from 'react';
import {
  StyledNavLinkButtonDay,
  StyledNavLinkListDay,
  StyledNavLinkButtonNight,
  StyledNavLinkListNight,
} from './StyledNavLink';

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { darkMode } = useSelector(darkThemeSelector);
  const { screenResolution } = useSelector(screenStatus);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    switch (screenResolution) {
      case 'desktop':
        setPages(['Projects']);
        break;
      case 'tablet':
        setPages(['Projects']);
        break;
      case 'mobile':
        setPages(['Summary', 'Projects']);
        break;
      default:
        setPages(['Projects']);
    }
  }, [screenResolution]);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return !darkMode ? (
    <AppBar position="static" sx={{ bgcolor: `${colors.appBarLight}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledNavLinkButtonDay to={'/'}>
            <HomeIcon
              sx={{
                fontSize: 30,
                '&:hover': { color: colors.body },
                color: 'inherit',
                display: { xs: 'none', md: 'flex' },
                mr: 1,
              }}
            />
          </StyledNavLinkButtonDay>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <StyledNavLinkListDay key={page} to={page.toLowerCase()}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ color: 'inherit', fontWeight: 'bold' }}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                </StyledNavLinkListDay>
              ))}
            </Menu>
          </Box>
          <StyledNavLinkButtonDay to={'/'}>
            <HomeIcon
              sx={{
                fontSize: 30,
                color: 'inherit',
                display: { xs: 'flex', md: 'none' },
                mr: 1,
              }}
            />
          </StyledNavLinkButtonDay>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <StyledNavLinkButtonDay key={page} to={page.toLowerCase()}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'inherit',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page}
                </Button>
              </StyledNavLinkButtonDay>
            ))}
          </Box>
          <ColorSwitches />
        </Toolbar>
      </Container>
    </AppBar>
  ) : (
    <AppBar position="static" sx={{ bgcolor: `${colors.appBarDark}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledNavLinkButtonNight to={'/'}>
            <HomeIcon
              sx={{
                fontSize: 30,
                '&:hover': { color: colors.switcher },
                color: 'inherit',
                display: { xs: 'none', md: 'flex' },
                mr: 1,
              }}
            />
          </StyledNavLinkButtonNight>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: colors.eliphant }}
            >
              <MenuIcon />
            </IconButton>
            <ThemeProvider theme={theme}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <StyledNavLinkListNight key={page} to={page.toLowerCase()}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ color: 'inherit', fontWeight: 'bold' }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  </StyledNavLinkListNight>
                ))}
              </Menu>
            </ThemeProvider>
          </Box>
          <StyledNavLinkButtonNight to={'/'}>
            <HomeIcon
              sx={{
                fontSize: 30,
                color: 'inherit',
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                mr: 1,
              }}
            />
          </StyledNavLinkButtonNight>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <StyledNavLinkListNight key={page} to={page.toLowerCase()}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'inherit',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page}
                </Button>
              </StyledNavLinkListNight>
            ))}
          </Box>
          <ColorSwitches />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
