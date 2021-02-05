import { useParams, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

const Gecko = ({ gecko }) => {
  const match = useRouteMatch('/list/:id');

  const { id } = useParams();
  return (
    <div>
      <h1>Gecko Site</h1>
      <p>{id}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { gecko: state.geckos.gecko };
};

export default connect(mapStateToProps)(Gecko);
