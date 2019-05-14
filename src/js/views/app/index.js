import Regular from 'regularjs'
import tpl from './index.html'
import './input'
import './show'

module.exports = Regular.extend({
  name: 'app',
  template: tpl,
  data: {
    show: true
  },
  init () {
  },
  handleSwitch () {
    this.data.show = !this.data.show
    this.$update()
  }
})
