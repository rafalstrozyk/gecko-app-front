import { connect } from 'react-redux';
import { setAfterTemplateIsOpen } from 'redux/actions/uiActions';

const Home = ({ templateIsOpen, setAfterTemplateIsOpen }) => {
  function handleAfterTemplateIsOpen() {
    setAfterTemplateIsOpen(!templateIsOpen);
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleAfterTemplateIsOpen} >Open after template</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    templateIsOpen: state.ui.afterTemplateOpen,
  };
};

export default connect(mapStateToProps, { setAfterTemplateIsOpen })(Home);
