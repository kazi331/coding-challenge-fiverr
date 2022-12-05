import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const menuItems = [
  { key: 1, href: '/', label: 'Home' },
  { key: 2, href: '/appointment', label: 'Appointment' },
  { key: 3, href: '/views', label: 'Views' },
]

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div>
      <header className='header'>
        <div className="container">
          <nav className='header-menu'>
            {menuItems.map((m) => <Link className={pathname === m.href ? 'active' : ''} key={m.key} href={m.href} >{m.label}</Link>)}
          </nav>
        </div>
      </header>

      {/* content  */}
      <div className="p-2 md:p-4 lg:p-10 mt-4" >
        {children}
      </div>

      {/* footer  */}
      <footer>
        <p className='text-center bg-gray-100 py-10 mt-10 '>
          Copyright &copy; 2022 | Made by
          <Link href="https://github.com/kazi331" title='Kazi On Github'>Kazi</Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout