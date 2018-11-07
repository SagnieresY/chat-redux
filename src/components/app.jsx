import React from 'react';

import MessageList from '../containers/message_list';
import ChatroomList from '../containers/chatroom_list';



const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="assets/images/logo.ico" alt="logo" />
      </div>
      <ChatroomList />
      <MessageList />
    </div>
  );
};

export default App;

