import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AppPage from './AppPage';
import Goals from './application-pages/Goals';
import Schedule from './application-pages/Schedule';
import Workouts from './application-pages/Workouts';
import Camera from './application-pages/Camera';
import Profile from './application-pages/Profile';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: '',
          element: <FirstPage />
        },
        {
          path: 'second',
          element: <SecondPage />
        },
        {
          path: 'sign-up',
          element: <SignUp />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path : 'goals',
          element : <Goals/>
        }
      ]
    },
    {
      path : '/page/',
      element : <AppPage/>,
      children : [
        {
          path : 'schedule',
          element : <Schedule/>
        },
        {
          path : 'workouts',
          element : <Workouts/>
        },
        {
          path : 'camera',
          element : <Camera/>
        },
        {
          path : 'profile',
          element : <Profile />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
