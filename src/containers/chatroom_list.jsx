import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { fetchMessages } from "../actions";

class ChatroomList extends Component {

  // componentWillMount() {
  //   this.props.fetchMessages();
  // }

  render() {
    // debugger
    return (
      <div className="channels-container">
        <ul>
          {this.props.chatrooms.map((chatroom) => {
              return (
                <li
                  key={chatroom}
                  className={chatroom === this.props.selectedChatroom ? 'active' : null}
                  // onClick={() => this.handleClick(channel)}
                  role="presentation"
                >
                  #{chatroom}
                </li>
              )
          })}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    chatrooms: state.chatrooms,
    selectedChatroom: state.selectedChatroom
  };
}

// export default FlatList;
export default connect(mapStateToProps)(ChatroomList);

