import React from 'react';
import {Table} from "reactstrap";
import DeleteGroup from "./deleteGroup";
import CreateEditGroup from "./CreateEditGroup";

class GroupsList extends React.Component {
    render() {
    const groups = this.props.groups;
    return (
      <Table white>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!groups || groups.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            groups.map((group,index) => (
              <tr key={group.id.toString()}>
                <td>{index+1}</td>
                <td>{group.name}</td>
                <td>{group.description}</td>
                <td>
                    <CreateEditGroup group={group} resetState={this.props.resetState}/>
                    <DeleteGroup id={group.id} resetState={this.props.resetState}/>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default GroupsList;