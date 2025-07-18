import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ContactLAyout from './layout/ContactLAyout'
import ContactInfo from './components/ContactInfo'
import RootLayout from './layout/RootLayout'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobLayout from './layout/JobLayout'
import Jobs, { jobLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
          <Route path='products' element={<Products />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<ContactLAyout />}>
            <Route path='info' element={<ContactInfo/>}/>
            <Route path='form' element={<ContactForm/>}/>
        </Route>
        <Route path='jobs' element={<JobLayout />} errorElement={<Error/>}>
          <Route index element={<Jobs />} loader={jobLoader}/>
          <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
return (
    <RouterProvider router={router}/>
  )
}

export default App