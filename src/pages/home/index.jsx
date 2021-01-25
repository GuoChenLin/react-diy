import React, { PureComponent } from 'react';

import {
  connect
} from 'react-redux'
import { changetest } from './../../store/actions';
class Home extends PureComponent {
  constructor () {
    super()
  }
  render () {
    return <div onClick={() => {this.totest()}}>
      {this.props.testdata.name || '点击获取名字'}
    </div>
  }
  totest () {
    // this.props.history.push('/test')
    console.log(this.props.testdata)
    this.props.changetestdata({name: 'linguocheng'})
  }
}

const mapStateToProps = state => {
  return {
    testdata: state.testdata
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changetestdata (data) {
      dispatch(changetest(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)