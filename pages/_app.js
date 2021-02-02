
import { ClickProvider } from '../contexts/click';
const CustomApp = ({ Component, pageProps }) => (
  <ClickProvider>
    <Component {...pageProps} />
  </ClickProvider>
);
export default CustomApp;