import { connect } from 'react-redux';
import { addAdult } from '../actions';
import Passenger from '../components/Passenger';


const mapStateToProps = state => {
  return {
    adults: state.adults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddAdult: () => {
      dispatch(addAdult())
    }
  }
}

const PassengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Passenger)

export default PassengerContainer
