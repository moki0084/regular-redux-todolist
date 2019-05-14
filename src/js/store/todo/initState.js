/**
 * initState
 * 初始化 State 数据
 */

export default {
  list: JSON.parse(localStorage.getItem('todo')) || []
}
