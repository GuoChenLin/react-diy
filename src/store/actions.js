// 引入唯一标识文件，以后修改页容易查找
import {
  TEST
} from './union'

// 定义一些方法修改状态
export const changetest = data => {
  return {
    type: TEST,
    data: data
  }
}