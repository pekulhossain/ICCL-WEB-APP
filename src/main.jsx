import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    {/* max-w-screen-xl mx-auto */}
      <div className=''>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>

  </React.StrictMode>,
)
