import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Root from './Components/Root/Root.jsx';
import Home from './Components/HomePage/Home/Home.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Login from './Components/Login/Login.jsx';
import { Provider } from 'react-redux';
import store from './Components/redux/store.js';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import Dashboard from './Components/DashboardPage/Dashboard/Dashboard.jsx';
import AllTasks from './Components/DashboardPage/AllTasks/AllTasks.jsx';
import App from './App.jsx';


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
  {
    path: "dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "alltasks",
        element: <AllTasks></AllTasks>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
)
