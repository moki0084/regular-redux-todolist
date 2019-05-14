/**
 * Reducer 更新 state
 */
import cloneDeep from 'lodash/cloneDeep'
import actionsType from './actionsType'

function setData (data) {
  localStorage.setItem('todo', JSON.stringify(data))
}

const reducers = (state = {}, actions) => {
  const rState = cloneDeep(state)
  switch (actions.type) {
    case actionsType.ADD_TODO: {
      rState.list.push(actions.data)
      setData(rState.list)
      break
    }
    case actionsType.DEL_TODO: {
      rState.list.splice(actions.data, 1)
      setData(rState.list)
      break
    }
    case actionsType.CHANGE_TODO: {
      rState.list[actions.data].isEdit = true
      break
    }
    case actionsType.EDIT_TODO: {
      let { index, val } = actions.data
      rState.list[index] = {
        ...rState.list[index],
        isEdit: false,
        val
      }
      setData(rState.list)
      break
    }
    default: {
      break
    }
  }
  return rState
}

export default reducers
