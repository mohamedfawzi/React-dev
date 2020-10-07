import React from 'react';
import './Header.scss';
const Header = (props) => {

  return (
    <header>
       <div className="my-image"> {props.title} </div>
       <h3> {props.content} </h3>       
    </header>
  )
}

export default Header;
