import { connect } from 'react-redux';
import ButtonAfterTemplate from 'components/Buttons/AfterButtonHandler';
import List from 'components/lists/list';

const Eating = ({ data }) => {
  return (
    <div>
      <ButtonAfterTemplate>Add new eating</ButtonAfterTemplate>
      <List width={'800px'} height={'75vh'} data={data} itemType="eating-list" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.geckos.eating_list,
  };
};

export default connect(mapStateToProps)(Eating);
