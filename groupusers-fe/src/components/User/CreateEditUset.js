import React from "react";
import {Button, Form, FormGroup, Input, Label,ModalBody, Modal, ModalHeader} from "reactstrap";
import axios from "axios";
import {API_URL_USERS} from "../../constants";
import Select from 'react-select';

class SelectMulti extends React.Component{
  render(){
    return (
    <Select
    value={this.props.default_val}
    isMulti
    name="groups"
    options={this.props.groups}
    className="basic-multi-select"
    classNamePrefix="select"
    getOptionLabel={(option) => `${option.name}`}
    getOptionValue={(option)=> `${option.name}`}
    onChange={this.props.onChange}
  />
    );
  };};


class CreateEditUser extends React.Component {
  state = {
    user:{
    id: 0,
    username: "",
    groups: []},
    modal:false
  };

  componentDidMount() {
    const user = this.props.user
    if (user) {
      this.setState({user});
    }
  }
  onChange = e => {
    this.setState({user:{...this.state.user, [e.target.name]: e.target.value }});
  };

  onChangeSelect = e => {
    this.setState({user:{...this.state.user,groups:e}});
  };

  createUser = e => {
    e.preventDefault();
    const user = {username:this.state.user.username, groups: this.state.user.groups}
    axios.post(API_URL_USERS, user).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    const user = {username:this.state.user.username, groups: this.state.user.groups.map(value => value.id)}
    axios.put(API_URL_USERS + this.props.user.id + "/", user).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };
  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };
  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };


  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={() => this.toggle()}>
          {this.props.user ? "Edit" : "Add"}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.props.user ? "Edit User " + this.props.user.username : "Create New User"}
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
              <FormGroup>
                <Label for="username">Username:</Label>
                  <Input
                     type="text"
                     name="username"
                     onChange={this.onChange}
                     value={this.defaultIfEmpty(this.state.user.username)}
                   />
              </FormGroup>
              <Label for="group">Select Group:</Label>
                <SelectMulti groups={this.props.groups} default_val={this.state.user.groups} onChange={this.onChangeSelect}/>
              <Button style={{marginTop:20}}>Send</Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CreateEditUser;