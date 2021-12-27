import { About, Contact, Skill, Work } from 'pages';
import { Box, Flex } from '@react-three/flex';
import { Canvas3JS, Text3D } from 'components';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { ChangePageLoading } from 'components';
import { MainLayout } from 'layouts';
import RouteContext from 'context/RouteContext';
import TitleAbout from 'pages/about/components/Title';
import TitleContact from 'pages/contact/components/Title';
import TitleSkill from 'pages/skill/components/Title';
import TitleWork from 'pages/work/components/Title';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const element = useRoutes([
    { path: '/', element: <About /> },
    { path: 'skill', element: <Skill /> },
    { path: 'work', element: <Work /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <div>notfound</div> },
  ]);

  const renderTitle = useMemo(() => {
    switch (pathname) {
      case '/':
        return <TitleAbout />;
      case '/skill':
        return <TitleSkill />;
      case '/work':
        return <TitleWork />;
      case '/contact':
        return <TitleContact />;
      default:
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location.pathname]);

  return (
    <RouteContext.Provider value={{ loading: loading, setLoading: setLoading }}>
      <MainLayout>
        <Canvas3JS>
          <Suspense fallback={null}>{renderTitle}</Suspense>
        </Canvas3JS>
        <ChangePageLoading loading={loading}>{element}</ChangePageLoading>
      </MainLayout>
    </RouteContext.Provider>
  );
}

export default App;
