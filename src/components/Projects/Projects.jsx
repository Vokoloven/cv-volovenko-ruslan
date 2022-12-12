import { Boxes } from 'Theme/Boxes';
import { projects } from './projectsList';

import { useSelector } from 'react-redux';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import { screenStatus } from 'redux/Selectors/screenStatus';
import {
  StyledProjectListDay,
  StyledProjectListNight,
} from './StyledProjectList';

const Projects = () => {
  const { darkMode } = useSelector(darkThemeSelector);
  const { screenResolution } = useSelector(screenStatus);

  return screenResolution === 'mobile' || screenResolution === 'tablet' ? (
    <Boxes display={'flex'} mt={4} flexDirection={'column'}>
      <h2>Projects</h2>
      <Boxes>
        {projects.map(
          ({ title, gitRepo, livePage, usedLanguages, description }) => {
            return !darkMode ? (
              <StyledProjectListDay key={title}>
                <Boxes
                  fontSize={3}
                  as={'a'}
                  mr={2}
                  href={gitRepo}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  {title}
                </Boxes>
                <Boxes
                  as={'a'}
                  fontSize={3}
                  href={livePage}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  Link
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  ({usedLanguages.join(', ')})
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  {description}
                </Boxes>
              </StyledProjectListDay>
            ) : (
              <StyledProjectListNight key={title}>
                <Boxes
                  fontSize={3}
                  as={'a'}
                  mr={2}
                  href={gitRepo}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  {title}
                </Boxes>
                <Boxes
                  as={'a'}
                  fontSize={3}
                  href={livePage}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  Link
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  ({usedLanguages.join(', ')})
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  {description}
                </Boxes>
              </StyledProjectListNight>
            );
          }
        )}
      </Boxes>
    </Boxes>
  ) : (
    <Boxes display={'flex'} mt={4} ml={5} flexDirection={'column'}>
      <h2>Projects</h2>
      <Boxes>
        {projects.map(
          ({ title, gitRepo, livePage, usedLanguages, description }) => {
            return !darkMode ? (
              <StyledProjectListDay key={title}>
                <Boxes
                  fontSize={3}
                  as={'a'}
                  mr={2}
                  href={gitRepo}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  {title}
                </Boxes>
                <Boxes
                  as={'a'}
                  fontSize={3}
                  href={livePage}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  Link
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  ({usedLanguages.join(', ')})
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  {description}
                </Boxes>
              </StyledProjectListDay>
            ) : (
              <StyledProjectListNight key={title}>
                <Boxes
                  fontSize={3}
                  as={'a'}
                  mr={2}
                  href={gitRepo}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  {title}
                </Boxes>
                <Boxes
                  as={'a'}
                  fontSize={3}
                  href={livePage}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  Link
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  ({usedLanguages.join(', ')})
                </Boxes>
                <Boxes as={'p'} mt={2}>
                  {description}
                </Boxes>
              </StyledProjectListNight>
            );
          }
        )}
      </Boxes>
    </Boxes>
  );
};
export default Projects;
