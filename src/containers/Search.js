import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

let search = (props) => {

  function handleSearch(e) {
    e.preventDefault();
    let origin = props.root.place.fromName;
    let destination = props.root.place.toName;
    let departure = props.root.place.startDate;
    let adults = props.root.passenger.adults;
    let children = props.root.passenger.children;
    let infants = props.root.passenger.infants;
    console.log(origin);
    const url = new URL('https://www.swiss.com/us/en/Book/Outbound/'+origin+'-'+destination+'/from-'+
          departure+'/adults-'+adults+'/children-'+children+'/infants-'+infants+'/class-economy/al-LX/sidmbvl');
    alert(url);

  }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        <RaisedButton label="Search" fullWidth={true} onClick={handleSearch} primary={true}/>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
    root: state
})

const Search = connect(mapStateToProps)(search)

export default Search
