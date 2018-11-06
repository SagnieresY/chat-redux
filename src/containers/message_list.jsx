import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "../components/message";

import { fetchMessages } from "../actions";

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    // debugger
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Chatroom #{this.props.selectedChatroom}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map(({ author, content, created_at }) => <Message author={author} content={content} created_at={created_at} key={created_at} />)}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChatroom: state.selectedChatroom
  };
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { fetchMessages: fetchMessages },
 dispatch
 );
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
