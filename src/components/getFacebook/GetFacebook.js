import React, { Component } from 'react'
import { FacebookProvider, Page } from 'react-facebook'
import { FaFacebook } from "react-icons/fa";

export default class GetFacebook extends Component {
    
  render () {     
    return (
      <FacebookProvider appId='381216016410763'>
        <div className='bg-secondary p-3'>
            <FaFacebook />
        </div>
        <Page href='https://www.facebook.com/wrshaa/' style={{width: "100%"}} tabs='timeline' />
      </FacebookProvider>
    )
  }
}
