import { connect } from 'react-redux';
import Place from '../components/Place';
import placeApp from '../reducers/place';
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
