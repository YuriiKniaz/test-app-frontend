import React from 'react'


import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(()=> import('./Layout/Layout'))
const Upload = lazy(()=> import('./Upload/Upload'))
const AppOpened = lazy(()=> import('./AppOpened/AppOpened'))

const App = () => {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Upload/>}/>
      <Route path='/appOpened' element={<AppOpened/>}/>
      <Route path='*' element={<Navigate to='/' replace/>}/>
      </Route>
    </Routes>
     
      </Suspense>
    </>
  )
}

export default App