import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import * as React from 'react';

import ThemeProvider from '@app/providers/ThemeProvider/ui/ThemeProvider';
import router from '@app/router';

import '@app/styles/global.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
