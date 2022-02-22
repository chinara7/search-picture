import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import './Theme.css'
import logo from './image/chart-logo.png'


class Theme extends Component {

  render() {

    return (

      <div className='logo'><Image src={logo} size='small' centered /></div>
     
    );
  }
}
export default Theme