import React, { PureComponent } from 'react';
export default class Test extends PureComponent {
  constructor () {
    super()
  }
  render () {
    return <div onClick={() => {this.totest()}} className="app">
      <img src={require('@/images/logo.png')}/>test
    </div>
  }
  totest () {
    this.props.history.push('/home')
  }
}