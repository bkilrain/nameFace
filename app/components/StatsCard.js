import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card'; 
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'

const StatsCard = function(props) {
  return (
    <Card>
      <CardHeader
        title="Welcome Person!"
        subtitle="it's NameFace time~"
      />
      <CardText>Here are some recent stats:</CardText>
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Total Faces</TableRowColumn>
            <TableRowColumn>{props.stats.totalFaces}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Names Placed</TableRowColumn>
            <TableRowColumn>{props.stats.namesPlaced}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Something Else</TableRowColumn>
            <TableRowColumn>{props.stats.somethingElse}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}

export default StatsCard