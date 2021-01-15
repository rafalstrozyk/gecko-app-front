import MainTemplate from 'template/mainTemplate';
import Root from 'views/root';
import GlobalStyle from 'globalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <MainTemplate>
      <Root />
    </MainTemplate>
  </>
);

export default App;
