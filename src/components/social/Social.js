import React, { Component } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"


class Social extends Component {
  render () {
    return (
      <div>
        <FontAwesomeIcon icon={Icons.faCopyright} size="6x" />
      </div>
    )
  }
}

export default Social
