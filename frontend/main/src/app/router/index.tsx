import Account from '@pages/Account';
import Bio from '@pages/Bio';
import History from '@pages/History';
import Home from '@pages/Home';
import Layout from '@pages/Layout/Layout';
import Main from '@pages/main';
import { createBrowserRouter } from 'react-router-dom';

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
    path: 'workouts',
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: 'nutrition',
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
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
  {
    path: 'account',
    element: (
      <Layout>
        <Account />
      </Layout>
    ),
  },
]);

export default router;
