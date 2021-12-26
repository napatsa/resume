import { About, Contact, Skill, Work } from 'pages';
import { useEffect, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { ChangePageLoading } from 'components';
import { MainLayout } from 'layouts';
import RouteContext from 'context/RouteContext';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const element = useRoutes([
    { path: '/', element: <About /> },
    { path: 'skill', element: <Skill /> },
    { path: 'work', element: <Work /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <div>notfound</div> },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location.pathname]);

  return (
    <RouteContext.Provider value={{ loading: loading, setLoading: setLoading }}>
      <MainLayout>
        <ChangePageLoading loading={loading}>{element}</ChangePageLoading>
      </MainLayout>
    </RouteContext.Provider>
  );
}

export default App;
