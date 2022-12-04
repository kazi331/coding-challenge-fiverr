import { Segmented } from 'antd';
import { Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';
const { Content, Footer } = Layout;

const menuItems = [
  { key: 1, href: '/', label: 'Home' },
  { key: 2, href: '/appointment', label: 'Appointment' },
  { key: 3, href: '/views', label: 'Views' },
]

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return <>
    <div>
      <header className='header'>
        <div className="container">
          <nav className='header-menu'>
            {menuItems.map((m) => <Link className={pathname === m.href ? 'active' : ''} key={m.key} href={m.href} >{m.label}</Link>)}
          </nav>
        </div>
      </header>

      {/* content  */}
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 40, minHeight: '65vh' }}>
        <Component {...pageProps} />
      </Content>

      {/* footer  */}
      <footer>
        <p className='text-center bg-gray-100 py-10 mt-10 '> Copyright &copy; 2022 | Made by <Link href="https://github.com/kazi331" title='Kazi On Github'>Kazi</Link></p>
      </footer>

    </div>

  </>
}

export default MyApp
