import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'; // Import BrowserRouter and RouterProvider
import App from './App.jsx';
import './index.css';
import router from './routers/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with the Router */}
      <RouterProvider router={router} /> {/* Pass your router to the RouterProvider */}
      <App />
    </Router>
  </React.StrictMode>
);
