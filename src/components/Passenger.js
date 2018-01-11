import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
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
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>Adults
          <RaisedButton label="-" secondary={true} onClick={() => props.onRemoveAdult()}/>
          <Paper style={style} zDepth={5}>{props.adults}</Paper>
          <RaisedButton label="+" primary={true} onClick={() => props.onAddAdult()}/>
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>Children
          <RaisedButton label="-" secondary={true} onClick={() => props.onRemoveChildren()}/>
          <Paper style={style} zDepth={5}>{props.children}</Paper>
          <RaisedButton label="+" primary={true} onClick={() => props.onAddChildren()}/>
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>Infants
          <RaisedButton label="-" secondary={true} onClick={() => props.onRemoveInfant()}/>
          <Paper style={style} zDepth={5}>{props.infants}</Paper>
          <RaisedButton label="+" primary={true} onClick={() => props.onAddInfant()}/>
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>
        </TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default Passenger;
