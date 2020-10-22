import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions/actionCreators';
import Main from './components/Main/Main';

// State properties automatically passed to Main
// How to get redux store content into our code
function mapStateToProps(state) {
   return {
      Prss: state.Prss,
      Errs: state.Errs,
   };
}

// Function properties automatically passed to Main
function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
   mapStateToProps,
   mapDispatchToProps
)(Main);


export default withRouter(App);