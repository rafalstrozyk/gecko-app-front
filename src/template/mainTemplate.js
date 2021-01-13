import { BrowserRouter } from 'react-router-dom';
import Helmet from 'helmet';

const MainTemplate = ({ children }) => (
  <div>
    <Helmet />
    <BrowserRouter>{children}</BrowserRouter>
  </div>
);

export default MainTemplate;
