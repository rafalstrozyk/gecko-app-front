import MainTemplate from 'template/mainTemplate';
import Root from 'views/root';
import GlobalStyle from 'globalStyle';
import Helmet from 'helmet';
import 'react-virtualized/styles.css';

const App = () => (
  <>
    <Helmet />
    <GlobalStyle />
    <MainTemplate>
      <Root />
    </MainTemplate>
  </>
);

export default App;
