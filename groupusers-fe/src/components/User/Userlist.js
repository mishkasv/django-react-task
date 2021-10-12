import React from 'react';
import {Table} from "reactstrap";
import DeleteUser from "./deleteUser";
import CreateEditUser from "./CreateEditUset";

class UsersList extends React.Component {
    render() {
    const users = this.props.users;
    return (
      <Table white>
        <thead>
          <tr>
            <th>Username</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!users || users.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id.toString()}>
                <td>{user.username}</td>
                <td>{user.created}</td>
                <td>
                    <CreateEditUser user={user} resetState={this.props.resetState} groups={this.props.groups}/>
                    <DeleteUser id={user.id} resetState={this.props.resetState}/>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UsersList;