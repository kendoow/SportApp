import { createBrowserRouter } from 'react-router-dom';

import Bio from '@pages/Bio';
import Builder from '@pages/Builder';
import History from '@pages/History';
import Home from '@pages/Home';
import Layout from '@pages/Layouts/AppLayout/Layout';
import AuthLayout from '@pages/Layouts/AuthLayout/AuthLayout';
import Main from '@pages/main';
import Templates from '@pages/Templates';
import Workout from '@pages/Workout';
import Workouts from '@pages/Workouts';
import ProtectedRoute from '@app/router/ProtectedRoute';
import LoginForm from '@features/auth/ui/LoginForm/LoginForm';
import CodeForm from "@features/auth/ui/CodeForm/CodeForm";

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
    path: 'workout/:id',
    element: (
      <Layout>
        <Workout />
      </Layout>
    ),
  },
  {
    path: 'login',
    element: (
      // <ProtectedRoute accessToken={true}>
      <AuthLayout>
        <CodeForm />
      </AuthLayout>
      // </ProtectedRoute>
    ),
  },
]);

export default router;
