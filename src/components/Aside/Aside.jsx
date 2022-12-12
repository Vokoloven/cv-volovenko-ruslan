import { Boxes } from 'Theme/Boxes';
import image from 'img/IMG_0012.JPG';
import { StyledImg } from './Styled/StyledImg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import colors from 'Theme/colors';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import listSkills from './asideSkillsList';
import { screenStatus } from 'redux/Selectors/screenStatus';

const Aside = () => {
  const { darkMode } = useSelector(darkThemeSelector);
  const { screenResolution } = useSelector(screenStatus);

  return screenResolution === 'mobile' || screenResolution === 'tablet' ? (
    <>
      <Boxes
        as={'aside'}
        display={'flex'}
        flexDirection={'column'}
        minWidth={270}
      >
        {screenResolution === 'mobile' && (
          <Boxes mt={4}>
            <Boxes as={'h1'}>Volovenko Ruslan</Boxes>
            <Boxes as={'p'} mt={2}>
              JUNIOR FRONTEND DEVELOPER
            </Boxes>
          </Boxes>
        )}
        <StyledImg src={image} alt="personal_photo" />
        <Boxes display={'flex'} flexDirection={'column'} ml={4}>
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Contacts
          </Boxes>
          <Boxes
            as={'a'}
            href="tel:+380983512576"
            target="_blank"
            rel="noreferrer noopener nofollow"
            mt={2}
          >
            +38 098 351 25 76
          </Boxes>
          <Boxes
            as={'a'}
            href="mailto:vokoloven@gmail.com"
            target="_blank"
            rel="noreferrer noopener nofollow"
            mt={2}
          >
            vokoloven@gmail.com
          </Boxes>
          {!darkMode ? (
            <>
              <Boxes
                as={'a'}
                href="https://github.com/Vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <GitHubIcon sx={{ color: `${colors.body}` }} /> GitHub
              </Boxes>
              <Boxes
                as={'a'}
                href="http://www.linkedin.com/in/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <LinkedInIcon sx={{ color: `${colors.body}` }} /> LinkedIn
              </Boxes>
              <Boxes
                as={'a'}
                href="https://t.me/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <TelegramIcon sx={{ color: `${colors.body}` }} /> Telegram
              </Boxes>
            </>
          ) : (
            <>
              <Boxes
                as={'a'}
                href="https://github.com/Vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <GitHubIcon sx={{ color: `${colors.eliphant}` }} /> GitHub
              </Boxes>
              <Boxes
                as={'a'}
                href="http://www.linkedin.com/in/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <LinkedInIcon sx={{ color: `${colors.eliphant}` }} /> LinkedIn
              </Boxes>
              <Boxes
                as={'a'}
                href="https://t.me/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <TelegramIcon sx={{ color: `${colors.eliphant}` }} /> Telegram
              </Boxes>
            </>
          )}
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Tech Skills
          </Boxes>
          <ul>
            {listSkills.techSkills.map(skill => {
              return (
                <Boxes as={'li'} key={skill} mt={2}>
                  {skill}
                </Boxes>
              );
            })}
          </ul>
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Soft Skills
          </Boxes>
          <ul>
            {listSkills.softSkills.map(skill => {
              return (
                <Boxes as={'li'} key={skill} mt={2}>
                  {skill}
                </Boxes>
              );
            })}
          </ul>
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Languages
          </Boxes>
          <ul>
            {listSkills.languages.map(language => {
              return (
                <Boxes as={'li'} key={language} mt={2}>
                  {language}
                </Boxes>
              );
            })}
          </ul>
        </Boxes>
      </Boxes>
      <Outlet />
    </>
  ) : (
    <>
      <Boxes
        as={'aside'}
        display={'flex'}
        flexDirection={'column'}
        minWidth={320}
      >
        {screenResolution === 'mobile' && (
          <Boxes mt={4}>
            <Boxes as={'h1'}>Volovenko Ruslan</Boxes>
            <Boxes as={'p'} mt={2}>
              JUNIOR FRONTEND DEVELOPER
            </Boxes>
          </Boxes>
        )}
        <StyledImg src={image} alt="personal_photo" />
        <Boxes display={'flex'} flexDirection={'column'} ml={4}>
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Contacts
          </Boxes>
          <Boxes
            as={'a'}
            href="tel:+380983512576"
            target="_blank"
            rel="noreferrer noopener nofollow"
            mt={2}
          >
            +38 098 351 25 76
          </Boxes>
          <Boxes
            as={'a'}
            href="mailto:vokoloven@gmail.com"
            target="_blank"
            rel="noreferrer noopener nofollow"
            mt={2}
          >
            vokoloven@gmail.com
          </Boxes>
          {!darkMode ? (
            <>
              <Boxes
                as={'a'}
                href="https://github.com/Vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <GitHubIcon sx={{ color: `${colors.body}` }} /> GitHub
              </Boxes>
              <Boxes
                as={'a'}
                href="http://www.linkedin.com/in/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <LinkedInIcon sx={{ color: `${colors.body}` }} /> LinkedIn
              </Boxes>
              <Boxes
                as={'a'}
                href="https://t.me/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <TelegramIcon sx={{ color: `${colors.body}` }} /> Telegram
              </Boxes>
            </>
          ) : (
            <>
              <Boxes
                as={'a'}
                href="https://github.com/Vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <GitHubIcon sx={{ color: `${colors.eliphant}` }} /> GitHub
              </Boxes>
              <Boxes
                as={'a'}
                href="http://www.linkedin.com/in/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <LinkedInIcon sx={{ color: `${colors.eliphant}` }} /> LinkedIn
              </Boxes>
              <Boxes
                as={'a'}
                href="https://t.me/vokoloven"
                target="_blank"
                rel="noreferrer noopener nofollow"
                mt={2}
              >
                <TelegramIcon sx={{ color: `${colors.eliphant}` }} /> Telegram
              </Boxes>
            </>
          )}
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Tech Skills
          </Boxes>
          <ul>
            {listSkills.techSkills.map(skill => {
              return (
                <Boxes as={'li'} key={skill} mt={2}>
                  {skill}
                </Boxes>
              );
            })}
          </ul>
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Soft Skills
          </Boxes>
          <ul>
            {listSkills.softSkills.map(skill => {
              return (
                <Boxes as={'li'} key={skill} mt={2}>
                  {skill}
                </Boxes>
              );
            })}
          </ul>
          <Boxes as={'h3'} mt={4} fontSize={4}>
            Languages
          </Boxes>
          <ul>
            {listSkills.languages.map(language => {
              return (
                <Boxes as={'li'} key={language} mt={2}>
                  {language}
                </Boxes>
              );
            })}
          </ul>
        </Boxes>
      </Boxes>
      <Outlet />
    </>
  );
};

export default Aside;
