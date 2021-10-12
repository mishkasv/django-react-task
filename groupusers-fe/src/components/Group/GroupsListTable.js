import React from 'react';
import axios from "axios";
import { Col, Container, Row} from "reactstrap";
import {API_URL_GROUPS} from "../../constants";
import CreateEditGroup from "./CreateEditGroup";
import GroupsList from "./Grouplist";

class GroupForm extends React.Component{
  state = {groups:[]}

  componentDidMount() {
    this.resetState();
  }

  getGroups = () => {
    axios.get(API_URL_GROUPS).then(res =>this.setState({ groups: res.data })
    );};

  resetState = () => {
    this.getGroups();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <CreateEditGroup resetState={this.resetState}/>
        <Row>
          <Col>
            <GroupsList
              groups={this.state.groups}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}


export default GroupForm;