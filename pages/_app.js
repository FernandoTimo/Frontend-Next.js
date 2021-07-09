import 'styles/global/Global.css';
import 'styles/global/Timoideas.css';
import 'styles/global/Timoideas.min.css';
import { StoreContextProvider } from 'context/Store.context';
import { Navigation, Theme } from 'components/timoideas/Timoideas.components';
const App = ({ Component, pageProps }) => {
  return (
    <StoreContextProvider>
      <Theme />
      <Navigation />
      <Component {...pageProps} />
    </StoreContextProvider>
  );
};

export default App;
