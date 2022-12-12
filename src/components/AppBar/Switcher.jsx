import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { alpha, styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { darkThemeSwitcher } from 'redux/darkTheme/darkThemeSlice';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import colors from 'Theme/colors';
import { Boxes } from 'Theme/Boxes';
import {
  StyledNavLinkButtonDownloadDay,
  StyledNavLinkButtonDownloadNight,
} from './StyledNavLink';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: `${colors.switcher}`,
    '&:hover': {
      backgroundColor: alpha(
        `${colors.switcher}`,
        theme.palette.action.hoverOpacity
      ),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: `${colors.switcher}`,
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export const ColorSwitches = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(darkThemeSelector);

  const handleChangeTheme = () => {
    dispatch(darkThemeSwitcher(!darkMode));
  };

  return (
    <Boxes display={'flex'}>
      <GreenSwitch onChange={handleChangeTheme} checked={darkMode} {...label} />
      {!darkMode ? (
        <Boxes>
          <NightsStayIcon sx={{ color: colors.white, fontSize: 30 }} />
          <StyledNavLinkButtonDownloadDay
            to={'download/CV Volovenko Ruslan.pdf'}
            target="_blank"
            download
          >
            <FileDownloadIcon sx={{ fontSize: 30 }} />
          </StyledNavLinkButtonDownloadDay>
        </Boxes>
      ) : (
        <Boxes>
          <NightsStayIcon sx={{ color: colors.switcher, fontSize: 30 }} />
          <StyledNavLinkButtonDownloadNight
            to={'download/CV Volovenko Ruslan.pdf'}
            target="_blank"
            download
          >
            <FileDownloadIcon sx={{ fontSize: 30 }} />
          </StyledNavLinkButtonDownloadNight>
        </Boxes>
      )}
    </Boxes>
  );
};
