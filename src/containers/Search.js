import React from 'react'
import { connect } from 'react-redux'
import { addFrom, getCountries } from '../actions'

let AddFrom = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          //dispatch(addFrom("Ecuador"))
        }}>
        <button type="submit">
          Search
        </button>
        {/* <div>{this.props.fromName}</div> */}
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
    fromName: state.place
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addFrom("Ecuador"))
    }
  }
}
const Search = connect(mapStateToProps, mapDispatchToProps)(AddFrom)

export default Search
