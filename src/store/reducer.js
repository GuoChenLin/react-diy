// 定义默认数据，在这里修改状态
import {
  TEST
} from './union'

const defaultConfig = {
  testdata: {
    name: null
  }
}
export default function reducer (state = defaultConfig, action) {
  switch(action.type) {
    case TEST:
      return {...state, testdata: action.data}
    default:
      return state
  }
}