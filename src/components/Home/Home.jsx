import { Boxes } from 'Theme/Boxes';
import { Summary } from 'components/Summary/Summary';
import { WorkExperience } from 'components/WorkExperience/WorkExperience';
import { Education } from 'components/Education/Education';
import { screenStatus } from 'redux/Selectors/screenStatus';
import { useSelector } from 'react-redux';

const Home = () => {
  const { screenResolution } = useSelector(screenStatus);

  return (
    <>
      {screenResolution === 'mobile' ? (
        <Boxes display={'flex'} ml={5} flexDirection={'column'}>
          {(screenResolution === 'desktop' ||
            screenResolution === 'tablet') && (
            <Boxes>
              <Boxes as={'h1'}>Volovenko Ruslan</Boxes>
              <Boxes as={'p'} mt={2}>
                JUNIOR FRONTEND DEVELOPER
              </Boxes>
            </Boxes>
          )}
          <Summary />
          <WorkExperience />
          <Education />
        </Boxes>
      ) : (
        <Boxes display={'flex'} mt={4} ml={5} flexDirection={'column'}>
          {(screenResolution === 'desktop' ||
            screenResolution === 'tablet') && (
            <Boxes>
              <Boxes as={'h1'}>Volovenko Ruslan</Boxes>
              <Boxes as={'p'} mt={2}>
                JUNIOR FRONTEND DEVELOPER
              </Boxes>
            </Boxes>
          )}
          <Summary />
          <WorkExperience />
          <Education />
        </Boxes>
      )}
    </>
  );
};

export default Home;
