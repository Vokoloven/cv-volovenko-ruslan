import { Boxes } from 'Theme/Boxes';
import { projects } from './projectsList';

import { useSelector } from 'react-redux';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import {
  StyledProjectListDay,
  StyledProjectListNight,
} from './StyledProjectList';

const Projects = () => {
  const { darkMode } = useSelector(darkThemeSelector);

  return (
    <Boxes display={'flex'} mt={4} ml={5} flexDirection={'column'}>
      <h2>Projects</h2>
      <Boxes>
        {projects.map(
          ({ title, gitRepo, livePage, usedLanguages, description }) => {
            return !darkMode ? (
              <StyledProjectListDay
                key={title}
                // mt={4}
                // maxWidth={600}
                // borderBottom={`2px solid ${colors.body}`}
                // pb={4}
              >
                <Boxes
                  fontSize={3}
                  as={'a'}
                  mr={2}
                  href={gitRepo}
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  {title}
                </Boxes>
                <Boxes
                  as={'a'}
                  fontSize={3}
                  href={livePage}
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
              <StyledProjectListNight
                key={title}
                // mt={4}
                // maxWidth={600}
                // borderBottom={`2px solid ${colors.eliphant}`}
                // pb={4}
              >
                <Boxes
                  fontSize={3}
                  as={'a'}
                  mr={2}
                  href={gitRepo}
                  rel="noreferrer noopener nofollow"
                  fontWeight={'bold'}
                >
                  {title}
                </Boxes>
                <Boxes
                  as={'a'}
                  fontSize={3}
                  href={livePage}
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
