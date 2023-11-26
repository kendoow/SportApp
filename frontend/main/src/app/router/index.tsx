import { createBrowserRouter } from 'react-router-dom'

import LoginForm from '@features/auth/ui/LoginForm/LoginForm'
import RestoreFrom from '@features/auth/ui/RestoreForm/RestoreForm'
import SignupForm from '@features/auth/ui/SignupForm/SignupForm'
import authStore from '@features/auth/store/authStore'
import ProtectedRoute from '@shared/lib/ProtectedRoute'
import Main from '@pages/main'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: 'login',
    element: <ProtectedRoute token={authStore.accessToken}><LoginForm /></ProtectedRoute>
  },
  {
    path: 'restore',
    element: <ProtectedRoute token={authStore.accessToken}><RestoreFrom /></ProtectedRoute>
  },
  {
    path: 'signup',
    element: <ProtectedRoute token={authStore.accessToken}><SignupForm /></ProtectedRoute>
  }
])


export default router