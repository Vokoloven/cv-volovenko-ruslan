import { Boxes } from 'Theme/Boxes';
import colors from 'Theme/colors';
import { useSelector } from 'react-redux';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';

export const Summary = () => {
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
      <h2>Summary</h2>
      <Boxes as={'p'} mt={2}>
        Some words about me. I am young Front-End developer, day by day I am
        growing up in knowledges of HTML, CSS, JavaScript, React. Looking for a
        full time position in a company. I have certain expirience following
        Team-Lead methodology due to work in team. I am a fast learner,
        responsible, and ready for learning every day.
      </Boxes>
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
      <h2>Summary</h2>
      <Boxes as={'p'} mt={2}>
        Some words about me. I am young Front-End developer, day by day I am
        growing up in knowledges of HTML, CSS, JavaScript, React. Looking for a
        full time position in a company. I have certain expirience following
        Team-Lead methodology due to work in team. I am a fast learner,
        responsible, and ready for learning every day.
      </Boxes>
    </Boxes>
  );
};
