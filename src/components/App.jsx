import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container';
import { LightGlobalStyle, DarkGlobalStyle } from 'Theme/globalStyles';
import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { darkThemeSelector } from 'redux/Selectors/darkThemeSelector';
import { useSelector } from 'react-redux';
import { Boxes } from 'Theme/Boxes';
import { useScreenChecker } from 'utils/screenWidth';
import { screenStatus } from 'redux/Selectors/screenStatus';
import { lazy, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';

const lazyLoading = path => lazy(() => import(`${path}`));

const Aside = lazyLoading('./Aside/Aside');
const Home = lazyLoading('components/Home/Home');
const Projects = lazyLoading('./Projects/Projects');

export const App = () => {
  const { screenResolution } = useSelector(screenStatus);
  const { darkMode } = useSelector(darkThemeSelector);
  useScreenChecker();

  return (
    <Boxes pb={4}>
      {!darkMode ? <LightGlobalStyle /> : <DarkGlobalStyle />}
      <Container>
        <ResponsiveAppBar />
        <Boxes
          display={'flex'}
          justifyContent={'flex-end'}
          flexDirection={'row-reverse'}
        >
          <Boxes>
            <Boxes display={'flex'}>
              <Suspense
                fallback={
                  <Boxes>
                    Loading...
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        '#e15b64',
                        '#f47e60',
                        '#f8b26a',
                        '#abbd81',
                        '#849b87',
                      ]}
                    />
                  </Boxes>
                }
              >
                <Routes>
                  <Route path={'/'} element={<Aside />}>
                    {(screenResolution === 'desktop' ||
                      screenResolution === 'tablet') && (
                      <Route path={'/'} element={<Home />} />
                    )}
                    {(screenResolution === 'desktop' ||
                      screenResolution === 'tablet') && (
                      <Route path={'projects'} element={<Projects />} />
                    )}
                  </Route>
                  {screenResolution === 'mobile' && (
                    <Route path={'projects'} element={<Projects />}></Route>
                  )}
                  <Route path={'summary'} element={<Home />}></Route>
                </Routes>
              </Suspense>
            </Boxes>
          </Boxes>
        </Boxes>
      </Container>
    </Boxes>
  );
};
