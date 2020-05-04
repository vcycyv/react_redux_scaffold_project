import { combineReducers } from 'redux'

import {entity_plural}Reducer from './{entity_plural}Reducer'


const rootReducer = combineReducers({
  {entity_plural}: {entity_plural}Reducer,
})

export default rootReducer
