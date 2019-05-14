import Regular from 'regularjs'
import tpl from './input.html'
import todo, { actionsType } from '../../store/todo'

module.exports = Regular.extend({
  name: 'Input',
  template: tpl,
  data: {
    value: ''
  },
  init () {
  },
  config () {
  },
  handleAdd () {
    todo.dispatch({
      type: actionsType.ADD_TODO,
      data: {
        isFinish: false,
        isEdit: false,
        val: this.data.value
      }
    })
    this.data.value = ''
    this.$update()
  }
})
