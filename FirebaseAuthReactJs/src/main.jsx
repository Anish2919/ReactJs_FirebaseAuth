import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ProtectedRoute from './pages/sharedPage/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Reset from './pages/Reset.jsx';
import UserExistance from './pages/sharedPage/UserExistance.jsx';

const routes = createRoutesFromElements(
  <>
    <Route path='/' element={<App/>}>
      <Route path='/' element={<UserExistance/>}>
        <Route index element={<SignIn/>} /> 
        <Route path='/signup' element={<SignUp/>} />
      </Route>
      <Route element={<ProtectedRoute/>}>
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='/reset' element={<Reset/>}/> 
    </Route>
    <Route path='*' element={<div>Page Not Found 404.</div>} /> 
  </>
)

const router = createBrowserRouter(routes); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<SignIn/>} /> 
          <Route path='/signup' element={<SignUp/>} /> 
        </Route>
        <Route path='*' element={<div>Page Not Found 404.</div>} /> 
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
