import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
