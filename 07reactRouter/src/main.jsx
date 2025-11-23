import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/user.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'


// 1. A bit tough method to write route variable as it contains array, objects and all, but one should use what he prefers.

/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      }
    ]
  }
]) */


// 2. Easy one (depends person to person)
// as this contains nested routes making it very understandable. 

// Also, here further nesting of routes cold be done in individual nested routes.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>} // method to take dynamic values from URLs
      />
      <Route 
      loader={githubInfoLoader} // remember we an also call apis inside the loader, read more abt loader in github.jsx component.
      path='github' element={<Github/>}/> 
    </Route>
  )

// remember the layout of the apps like fb,insta etc remains the same the data varies on the basis of the id of the respective users.

// Also, the access of this id parameter is automatically found in the element/component rendering it.

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// Above the RouterProvider acts as a wrapper.
