import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { alpha, styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { darkThemeSwitcher } from 'redux/darkTheme/darkThemeSlice';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import colors from 'Theme/colors';
import { Boxes } from 'Theme/Boxes';

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
const CV =
  'https://drive.google.com/file/d/1iF3-wf_Tw3EXB1C--Yf0pTYh709YSqt5/view?usp=share_link';

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
          <a href={CV} target="_blank" rel="noreferrer noopener nofollow">
            <FileDownloadIcon sx={{ color: colors.white, fontSize: 30 }} />
          </a>
        </Boxes>
      ) : (
        <Boxes>
          <NightsStayIcon sx={{ color: colors.switcher, fontSize: 30 }} />

          <a href={CV} target="_blank" rel="noreferrer noopener nofollow">
            <FileDownloadIcon sx={{ color: colors.eliphant, fontSize: 30 }} />
          </a>
        </Boxes>
      )}
    </Boxes>
  );
};
