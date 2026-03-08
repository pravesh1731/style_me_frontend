import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard'


const Body = () => {
  const appRoute = createBrowserRouter([
    {
     path: '/',
     element: <Dashboard />
    },
    {
     path: '/signin',
     element: <SignIn />
    },
    {
     path: '/signup',
     element: <SignUp />
    },
    // {
    //  path: '/dashboard',
    //  element: <h1>About</h1>
    // }
  ])

  return (
    <div>
    <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body