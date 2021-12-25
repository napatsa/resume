import { MainLayout } from 'layouts';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes([
    { path: '/', element: <div>home</div> },
    { path: 'dashboard', element: <div>dashboard</div> },
    { path: '*', element: <div>notfound</div> },
  ]);
  return <MainLayout>{element}</MainLayout>;
}

export default App;
