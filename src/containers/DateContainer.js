/*
Container to connect props and dispatch actions to the visible component
*/

import { connect } from 'react-redux';
import { startDate, endDate } from '../actions';
import Date from '../components/Date';


const mapStateToProps = state => {
  return {
    dateFrom: state.dateFrom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeStartDate: date => {
      dispatch(startDate(date))
    },
    onChangeEndDate: date => {
      dispatch(endDate(date))
    }
  }
}

const DateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Date)

export default DateContainer
