import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setCity } from "../actions";


class Message extends Component {

  render() {
    return (
          <div >
            {this.props.content}
          </div>
      );
  }
};


export default Message;
