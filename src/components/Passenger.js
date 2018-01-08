import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
 const style = {
   height: 20,
   width: 50,
   margin: 20,
   textAlign: 'center',
   display: 'inline-block',
 };

const Passenger = (props) => (
  <Table selectable="false" >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      {/* <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow> */}
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>Adults
          <RaisedButton label="-" secondary={true} />
          <Paper style={style} zDepth={5}>fasd</Paper>
          <RaisedButton label="+" primary={true} onClick={(event) => props.onAddAdult()}/>
        </TableRowColumn>
        {/* <TableRowColumn>Employed</TableRowColumn> */}
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default Passenger;
