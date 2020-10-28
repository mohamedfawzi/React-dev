import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
 
export default class GetFacebook extends Component {
  render() {
    return (
      <FacebookProvider appId="381216016410763">
        <EmbeddedPost  href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    );
  }
}