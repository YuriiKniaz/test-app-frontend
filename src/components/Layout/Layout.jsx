import React from 'react';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from 'components/Loading/Loading';


const Layout = () => {
  return (
    <>
      
      <main>
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
