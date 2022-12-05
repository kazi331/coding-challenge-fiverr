
import Layout from '../components/Layout';
import AppointmentProvider from '../contexts/appointmentContext';
import DataProvider from '../contexts/dataContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      <DataProvider>
        <AppointmentProvider>
          <Component {...pageProps} />
        </AppointmentProvider>
      </DataProvider>
    </Layout>

  </>
}

export default MyApp
