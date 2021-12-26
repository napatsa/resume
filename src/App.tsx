import { About, Contact, Skill, Work } from 'pages';

import { MainLayout } from 'layouts';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes([
    { path: '/', element: <About /> },
    { path: 'skill', element: <Skill /> },
    { path: 'work', element: <Work /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <div>notfound</div> },
  ]);
  return <MainLayout>{element}</MainLayout>;
}

export default App;
