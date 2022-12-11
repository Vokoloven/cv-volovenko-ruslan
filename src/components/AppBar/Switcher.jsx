import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { alpha, styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { darkThemeSwitcher } from 'redux/darkTheme/darkThemeSlice';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import colors from 'Theme/colors';

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
    <div>
      <GreenSwitch onChange={handleChangeTheme} checked={darkMode} {...label} />
      {!darkMode ? (
        <NightsStayIcon sx={{ color: colors.white }} />
      ) : (
        <NightsStayIcon sx={{ color: colors.switcher }} />
      )}
    </div>
  );
};
