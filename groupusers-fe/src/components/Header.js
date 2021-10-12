import React from 'react';
import {CardHeader} from 'reactstrap';
import {LIST_OF_HEADER_ITEMS} from "../constants";
import { Link, withRouter } from "react-router-dom";

function ListHeader(list_of_header){
    const styles = {
        display: "flex",
    }
    const home = <Link class="nav-link" to='/'>Home</Link>
    const result = list_of_header.map((header_name,index) =>
      <Link key={index.toString()} class="nav-link" to={"/"+header_name.toLocaleString().toLocaleLowerCase()}>{header_name}</Link>
  )
  return <div style={styles}>{home}{result}</div>
}
const Header = () => {
  return (
      <CardHeader>
          {ListHeader(LIST_OF_HEADER_ITEMS)}
      </CardHeader>
  );
};

export default withRouter(Header);