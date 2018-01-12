/*
Container to connect props and dispatch actions to the visible component
*/

import { connect } from 'react-redux';
import { addAdult, removeAdult, addChildren, removeChildren,
        addInfant, removeInfant} from '../actions';
import Passenger from '../components/Passenger';

const mapStateToProps = state => {
  return {
    adults: state.passenger.adults,
    children: state.passenger.children,
    infants: state.passenger.infants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddAdult: () => {
      dispatch(addAdult())
    },
    onRemoveAdult: () => {
      dispatch(removeAdult())
    },
    onAddChildren: () => {
      dispatch(addChildren())
    },
    onRemoveChildren: () => {
      dispatch(removeChildren())
    },
    onAddInfant: () => {
      dispatch(addInfant())
    },
    onRemoveInfant: () => {
      dispatch(removeInfant())
    }
  }
}


const PassengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Passenger)

export default PassengerContainer
