import { createBrowserRouter } from 'react-router-dom';

import Bio from '@pages/Bio';
import Builder from '@pages/Builder';
import History from '@pages/History';
import Home from '@pages/Home';
import Layout from '@pages/Layout/Layout';
import Main from '@pages/main';
import Templates from '@pages/Templates';
import Workouts from '@pages/Workouts';
import ProtectedRoute from '@app/router/ProtectedRoute';
import authStore from '@features/auth/store/authStore';
import LoginForm from '@features/auth/ui/LoginForm/LoginForm';
import RestoreFrom from '@features/auth/ui/RestoreForm/RestoreForm';
import SignupForm from '@features/auth/ui/SignupForm/SignupForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: 'home',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: 'bio',
    element: (
      <Layout>
        <Bio />
      </Layout>
    ),
  },
  {
    path: 'templates',
    element: (
      <Layout>
        <Templates />
      </Layout>
    ),
  },
  {
    path: 'builder',
    element: <Builder />,
  },
  {
    path: 'history',
    element: (
      <Layout>
        <History />
      </Layout>
    ),
  },
  {
    path: 'workouts',
    element: (
      <Layout>
        <Workouts />
      </Layout>
    ),
  },
  {
    path: 'login',
    element: (
      <ProtectedRoute accessToken={authStore.accessToken}>
        <LoginForm />
      </ProtectedRoute>
    ),
  },
  {
    path: 'restore',
    element: (
      <ProtectedRoute accessToken={authStore.accessToken}>
        <RestoreFrom />
      </ProtectedRoute>
    ),
  },
  {
    path: 'signup',
    element: (
      <ProtectedRoute accessToken={authStore.accessToken}>
        <SignupForm />
      </ProtectedRoute>
    ),
  },
]);

export default router;
