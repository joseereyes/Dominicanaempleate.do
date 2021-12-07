import { useRoutes } from 'react-router-dom';
//

import MainLayouts from "./components/mainLayouts"
import Content from './components/jobs/content';
import JobContent from "./components/jobs/content-job"
//

export default function Router() {

  return useRoutes([
    {
      path: '/',
      element: <MainLayouts />,
      children: [
        { path: "/", element: <Content /> },
        { path: "/job/:jobId", element: <JobContent /> },
        { path: '*', element: <h1>No hemos encontrado nada, lo siento</h1> }
      ]
    },
  ]);
}