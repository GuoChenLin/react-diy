// 整合所有路由
import React, { PureComponent } from 'react';
// home路由
import TestRouter from './test';

import {
  HashRouter
} from 'react-router-dom'
class AllRouter extends PureComponent {
  render () {
    return (
      <HashRouter>
        <TestRouter></TestRouter>
      </HashRouter>
    )
  }
}

export default AllRouter