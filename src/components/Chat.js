/**
 * Nalin Savara <nsnsns@darksun.biz> October 2020 - All rights reserved
 * Also, nsnsns@gmail.com
 */


import React, { Component } from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
//import{ PropTypes } from 'react';
import PropTypes from 'prop-types';

import Backend from '../Backend';
import { FriendsContext } from '../FriendsContext';


export default class Chat extends React.Component {
  state = {
    messages: [],
  };

//var name;

//  constructor() {
//name="John Smith";
//}
  render() {
//  const { params } = this.props.navigation.state.params;
//  const itemId = params ? params.name : "null";
this.state.name=this.context.currentFriends;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.context.currentFriends, //itemId, // this.props.navigation.state.params.name,
//itemId,
//was: this.props.name,
        }}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}


Chat.contextType = FriendsContext;

//commented stuff that apparently led to earlier errors...

Chat.defaultProps = {
  name: 'John Smith',
};

Chat.propTypes = {
  name: PropTypes.string,
};


