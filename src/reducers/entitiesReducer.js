import * as actions from '../actions/{entity_plural}Actions'

export const initialState = {
  loading: false,
  hasErrors: false,
  {entity_plural}: [],
}

export default function {entity_plural}Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_{entity_plural_const}:
      return { ...state, loading: true }
    case actions.GET_{entity_plural_const}_SUCCESS:
      return { {entity_plural}: action.payload, loading: false, hasErrors: false }
    case actions.GET_{entity_plural_const}_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
