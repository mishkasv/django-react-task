import React from 'react';
import axios from "axios";
import {Col, Container, Row} from "reactstrap";
import {API_URL_GROUPS, API_URL_USERS} from "../../constants";
import UsersList from "./Userlist";
import CreateEditUser from "./CreateEditUset";

class UserForm extends React.Component{
  state = {users:[],groups:[]}

  componentDidMount() {
    this.resetState();
  }

  getUsers = () => {
    axios.get(API_URL_USERS).then(res =>this.setState({ users: res.data }))
    axios.get(API_URL_GROUPS).then(res => this.setState({groups:res.data}))
    };

  resetState = () => {
    this.getUsers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <CreateEditUser resetState={this.resetState}/>
        <Row>
          <Col>
            <UsersList
              users={this.state.users}
              resetState={this.resetState}
              groups={this.state.groups}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}


export default UserForm;