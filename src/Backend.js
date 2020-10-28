/**
 * Nalin Savara <nsnsns@darksun.biz> October 2020 - All rights reserved
 * Also, nsnsns@gmail.com
 */

import firebase from 'firebase';
//nalin: needed...
import { Component } from 'react';
//
// React gives a warning; and at some point will uncomment the below - 
// but right now things seem ok; because installing the package below 
// leads to side effects and dependencies.
//
//import {AsyncStorage} from '@react-native-community/async-storage';
import PropTypes from 'prop-types';


class Backend {
  uid = '';
  messagesRef = null;
  // initialize Firebase Backend
  constructor() {
    firebase.initializeApp({
      apiKey: 'add firebase API Key from google-services.json here - client_info / api_key ',
      authDomain: 'add auth domain from google-services.json here - project_info / firebase url i.e.: [subdomain].firebaseio.com',
      databaseURL: ' project_info / firebase_url ',
      storage_bucket: ' project_info / storage_bucket',
    });
  }

  setUid(value) {
    this.uid = value;
  }

  getUid() {
    return this.uid;
  }

  // retrieve the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
