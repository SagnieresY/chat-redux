import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "../components/message";

import { setMessages } from "../actions";

class MessageList extends Component {

  // componentWillMount() {
  //   this.props.setMessages();
  // }

  render() {
    // debugger
    return (
      <div className="">
          {this.props.messages.map(({ author, content, created_at }) => <Message author={author} content={content} created_at={created_at} key={created_at} />)}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

// function mapDispatchToProps(dispatch) {
//  return bindActionCreators(
//  { setMessages: setMessages },
//  dispatch
//  );
// }

// export default FlatList;
export default connect(mapStateToProps)(MessageList);
