import { About, Contact, Skill, Work } from 'pages';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { Canvas3JS } from 'components';
import { ChangePageLoading } from 'components';
import { MainLayout } from 'layouts';
import RouteContext from 'context/RouteContext';
import TitleAbout from 'pages/about/components/Title';
import TitleContact from 'pages/contact/components/Title';
import TitleSkill from 'pages/skill/components/Title';
import TitleWork from 'pages/work/components/Title';
import { useSpring } from '@react-spring/three';
import { useWindowSize } from 'hooks';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { pathname: currentPathname } = location;
  const { width } = useWindowSize();

  const element = useRoutes([
    { path: '/', element: <About /> },
    { path: 'skill', element: <Skill /> },
    { path: 'work', element: <Work /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <div>notfound</div> },
  ]);

  const isShowTitle = (pathname: string) => {
    return currentPathname === pathname && !loading;
  };

  const { posAbout, posSkill, posWork, posContact } = useSpring({
    posAbout: isShowTitle('/') ? [0, 0, 0] : [-width / 3.1, 0, 0],
    posSkill: isShowTitle('/skill') ? [0, 0, 0] : [-width / 3.1, 0, 0],
    posWork: isShowTitle('/work') ? [0, 0, 0] : [-width / 3.1, 0, 0],
    posContact: isShowTitle('/contact') ? [0, 0, 0] : [-width / 3.1, 0, 0],
    delay: loading ? 1000 : 500,
    config: { mass: 1, tension: 180, friction: 12 },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location.pathname]);
  return (
    <RouteContext.Provider value={{ loading: loading, setLoading: setLoading }}>
      <MainLayout>
        <Canvas3JS id="title-canvas">
          <Suspense fallback={null}>
            <TitleAbout pos={posAbout} />
            <TitleSkill pos={posSkill} />
            <TitleWork pos={posWork} />
            <TitleContact pos={posContact} />
          </Suspense>
        </Canvas3JS>
        <ChangePageLoading loading={loading}>{element}</ChangePageLoading>
      </MainLayout>
    </RouteContext.Provider>
  );
}

export default App;
