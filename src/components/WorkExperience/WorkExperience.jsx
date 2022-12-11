import { Boxes } from 'Theme/Boxes';
import { WorkExperienceList } from './workExperienceList';
import colors from 'Theme/colors';
import { useSelector } from 'react-redux';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import { nanoid } from 'nanoid';

export const WorkExperience = () => {
  const { darkMode } = useSelector(darkThemeSelector);

  return !darkMode ? (
    <Boxes
      display={'flex'}
      flexDirection={'column'}
      mt={4}
      maxWidth={600}
      borderBottom={`2px solid ${colors.body}`}
      pb={4}
    >
      <h2>Work Experience</h2>
      {WorkExperienceList.map(({ title, dateDue, lists }) => {
        return (
          <Boxes key={title}>
            <Boxes as={'h3'} mt={2}>
              {title}
            </Boxes>
            <Boxes as={'p'} mt={2}>
              {dateDue}
            </Boxes>
            <Boxes as={'ul'} mt={2}>
              {lists.map(list => {
                return (
                  <Boxes as={'li'} mt={1} key={nanoid()}>
                    {list}
                  </Boxes>
                );
              })}
            </Boxes>
          </Boxes>
        );
      })}

      <Boxes as={'ul'} mt={2}></Boxes>
    </Boxes>
  ) : (
    <Boxes
      display={'flex'}
      flexDirection={'column'}
      mt={4}
      maxWidth={600}
      borderBottom={`2px solid ${colors.eliphant}`}
      pb={4}
    >
      <h2>Work Experience</h2>
      {WorkExperienceList.map(({ title, dateDue, lists }) => {
        return (
          <Boxes key={title}>
            <Boxes as={'h3'} mt={2}>
              {title}
            </Boxes>
            <Boxes as={'p'} mt={2}>
              {dateDue}
            </Boxes>
            <Boxes as={'ul'} mt={2}>
              {lists.map(list => {
                return (
                  <Boxes as={'li'} mt={1} key={nanoid()}>
                    {list}
                  </Boxes>
                );
              })}
            </Boxes>
          </Boxes>
        );
      })}

      <Boxes as={'ul'} mt={2}></Boxes>
    </Boxes>
  );
};
