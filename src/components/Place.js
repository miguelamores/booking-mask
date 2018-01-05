import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
//import VisiblePlace from '../containers/VisiblePlace';

// const Place = ({props, onSelect}) => {
//
//   return (
//     <div>
//       <Autocomplete
//         getItemValue={(item) => item.name}
//         items={props.countries.state}
//         renderItem={(item, isHighlighted) =>
//           <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
//             {item.name}
//           </div>
//         }
//         //value={this.state.value}
//       //onChange={}
//       onSelect={onSelect()}
//       />
//       {/* props: {this.props.countries.state.map((countrie,index) => <div>{countrie.name}</div>)} */}
//       {console.log(this.props.countries.state)}
//
//       <input placeholder="From"></input>
//       <input placeholder="To"></input>
//       {/* onSelect={value => this.setState({ value })} */}
//     </div>
//   )
//
// }

class Place extends Component{
  constructor() {
    super();
  }

  render() {
    //let value;
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.props.countries.state}
          renderItem={(item, isHighlighted) =>
            <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name}
            </div>
          }
          value={this.props.countries.fromName}
        onChange={(e) => this.props.onSelect(e.target.value)}
        onSelect={(val) => this.props.onSelect(val)}
        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
        wrapperProps={{from: 'from'}}
        />

        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.props.countries.state}
          renderItem={(item, isHighlighted) =>
            <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name}
            </div>
          }
          value={this.props.countries.toName}
        onChange={(e) => this.props.onSelect(e.target.value)}
        onSelect={(val) => this.props.onSelect(val)}
        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
        wrapperProps={{to: 'to'}}
        />

        <input placeholder="From"></input>
        <input placeholder="To"></input>
{/* onSelect={value => this.setState({ value })} */}
      </div>
    )
  }
}


export default Place;
