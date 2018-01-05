import { connect } from 'react-redux';
import Place from '../components/Place';
import placeApp from '../reducers/place';
import { addFrom, addTo } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.place
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: text => {
      console.log(ownProps.wrapperProps);
      if(ownProps.wrapperProps === 'from'){
        console.log(ownProps.filter);
        dispatch(addFrom(text))}
      else{
        console.log(ownProps.filter);
        dispatch(addTo(text))
      }

    }
  }
}

const VisiblePlace = connect(
  mapStateToProps,
  mapDispatchToProps
)(Place)

export default VisiblePlace
