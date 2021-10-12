import React from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";
import {API_URL_GROUPS} from "../../constants";

class DeleteGroup extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteStudent = id => {
    axios.delete(API_URL_GROUPS + id).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    return (
      <React.Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Remove
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really wanna delete the group {this.props.id}?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteStudent(this.props.id)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DeleteGroup;