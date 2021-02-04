
import { UserProvider } from '../contexts/user';
const CustomApp = ({ Component, pageProps }) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
);
export default CustomApp;