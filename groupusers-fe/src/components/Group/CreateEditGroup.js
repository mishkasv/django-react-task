import React from "react";
import {Button, Form, FormGroup, Input, Label,ModalBody, Modal, ModalHeader} from "reactstrap";
import axios from "axios";
import {API_URL_GROUPS} from "../../constants";

class CreateEditGroup extends React.Component {
  state = {group:{
    id: 0,
    name: "",
    description: ""},
    modal:false
  };

  componentDidMount() {
    const group = this.props.group
    if (group) {
      this.setState({group:group});
    }
  }
  onChange = e => {
    this.setState({group:{...this.state.group, [e.target.name]: e.target.value }});
  };

  createGroup = e => {
    e.preventDefault();
    const group = {name:this.state.group.name,description: this.state.group.description}
    axios.post(API_URL_GROUPS, group).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  editGroup = e => {
    e.preventDefault();
    const group = {name:this.state.group.name,description: this.state.group.description}
    axios.put(API_URL_GROUPS + this.props.group.id + "/", group).then(() => {
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
          {this.props.group ? "Edit" : "Add"}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.props.group ? "Edit Group " + this.props.group.pk : "Create New Group"}
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.props.group ? this.editGroup : this.createGroup}>
              <FormGroup>
                <Label for="name">Name:</Label>
                  <Input
                     type="text"
                     name="name"
                     onChange={this.onChange}
                     value={this.defaultIfEmpty(this.state.group.name)}
                   />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description:</Label>
                  <Input
                     type="textarea"
                     name="description"
                     onChange={this.onChange}
                     value={this.defaultIfEmpty(this.state.group.description)}
                   />
              </FormGroup>
              <Button style={{marginTop:20}}>Send</Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CreateEditGroup;