import Regular from 'regularjs'
import { connect } from 'regular-mixin-redux'

import tpl from './show.html'
import todo, { actionsType } from '../../store/todo'

const component = {
  name: 'Show',
  template: tpl,
  config () {
  },
  destroy () {
  },
  handleDel (index) {
    todo.dispatch({
      type: actionsType.DEL_TODO,
      data: index
    })
  },
  handleChange (index) {
    todo.dispatch({
      type: actionsType.CHANGE_TODO,
      data: index
    })
  },
  handleEdit (e, index) {
    todo.dispatch({
      type: actionsType.EDIT_TODO,
      data: {
        index,
        val: e.target.parentElement.querySelector('input').value
      }
    })
  },
  subscribeTodo () { // 监听 todo 的方法

  }
}

export default Regular.extend(connect(component, [todo]))
