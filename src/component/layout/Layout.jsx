import React from 'react';
import Header from '../header/Header';
import Header from '../footer/Footer';
import Header from './Layout.css';
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout