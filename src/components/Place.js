import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

class Place extends Component{

  render() {
    return (
      <div>
        <label>From: </label>
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.props.var.state}
          renderItem={(item, isHighlighted) =>
            <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name} - {item.code}
            </div>
          }
          value={this.props.var.fromName}
        onChange={(e) => this.props.onSelectFrom(e.target.value)}
        onSelect={(val) => this.props.onSelectFrom(val)}
        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
        />

        <label>To: </label>
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.props.var.state}
          renderItem={(item, isHighlighted) =>
            <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name}
            </div>
          }
          value={this.props.var.toName}
        onChange={(e) => this.props.onSelectTo(e.target.value)}
        onSelect={(val) => this.props.onSelectTo(val)}
        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
        />
      </div>
    )
  }
}


export default Place;
