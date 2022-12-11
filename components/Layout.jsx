import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const menuItems = [
  { key: 1, href: '/', label: 'Home' },
  { key: 2, href: '/appointment', label: 'Appointment' },
  { key: 3, href: '/view', label: 'View' },
]

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
    <Head>
      <title>Appointment</title>
    </Head>
      <header className='header bg-white bg-opacity-50  backdrop-blur dark:bg-gray-800 dark:text-gray-200 z-10'>
        <div className="container">
          <nav className='header-menu'>
            {menuItems.map((m) => <Link className={pathname === m.href ? 'active' : ''} key={m.key} href={m.href} >{m.label}</Link>)}
          </nav>
        </div>
      </header>

      {/* content  */}
      <div className="p-2 md:p-4 lg:p-10 pt-4 bg-white dark:bg-gray-800 dark:text-gray-200" >
        {children}
      </div>

      {/* footer  */}
      <footer className='sticky bottom-0 -z-10'>
        <p className='text-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200 py-10 pt-10 '>
          Copyright &copy; 2022 | Made by
          <Link href="https://github.com/kazi331" className='text-green-600' title='Kazi On Github'> Kazi</Link>
        </p>
      </footer>
    </>
  )
}

export default Layout