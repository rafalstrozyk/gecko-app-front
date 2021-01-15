import { BrowserRouter } from 'react-router-dom';
import Helmet from 'helmet';
import Navbar from 'components/navbar';

const MainTemplate = ({ children }) => (
  <div>
    <Helmet />

    <BrowserRouter>
      <Navbar />
      {children}
    </BrowserRouter>
  </div>
);

export default MainTemplate;
