import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {
  const appRoute = createBrowserRouter([
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