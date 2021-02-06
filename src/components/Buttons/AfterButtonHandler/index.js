import { connect } from 'react-redux';
import { setAfterTemplateIsOpen } from 'redux/actions/uiActions';

const Button = ({ templateIsOpen, setAfterTemplateIsOpen, children }) => {
  function handleAfterTemplateIsOpen() {
    setAfterTemplateIsOpen(!templateIsOpen);
  }

  return <button onClick={handleAfterTemplateIsOpen}>{children}</button>;
};
const mapStateToProps = (state) => {
  return {
    templateIsOpen: state.ui.afterTemplateOpen,
  };
};

export default connect(mapStateToProps, { setAfterTemplateIsOpen })(Button);
