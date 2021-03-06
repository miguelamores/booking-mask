/*
Container to connect props and dispatch actions to the visible component
*/

import { connect } from 'react-redux';
import Place from '../components/Place';
import { addFrom, addTo } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    var: state.place
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectFrom: text => {
      dispatch(addFrom(text))
    },
    onSelectTo: text => {
      dispatch(addTo(text))
    }
  }
}

const VisiblePlace = connect(
  mapStateToProps,
  mapDispatchToProps
)(Place)

export default VisiblePlace
