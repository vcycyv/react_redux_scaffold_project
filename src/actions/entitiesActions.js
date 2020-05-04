export const GET_{entity_plural_const} = 'GET {entity_plural_const}'
export const GET_{entity_plural_const}_SUCCESS = 'GET_{entity_plural_const}_SUCCESS'
export const GET_{entity_plural_const}_FAILURE = 'GET_{entity_plural_const}_FAILURE'

export const get{entity_capital_plural} = () => ({ type: GET_{entity_plural_const} })
export const get{entity_capital_plural}Success = {entity_plural} => ({
  type: GET_{entity_plural_const}_SUCCESS,
  payload: {entity_plural},
})
export const get{entity_capital_plural}Failure = () => ({ type: GET_{entity_plural_const}_FAILURE })

export const getDataTest = () => ([{id: 'id_abc', title: 'title abc', body: 'body abc'}])

export function fetch{entity_capital_plural}() {
  return async dispatch => {
    dispatch(get{entity_capital_plural}())

    try {
      //const response = await fetch('https://jsonplaceholder.typicode.com/{entity_plural}')
      const data = await /*response.json()*/ getDataTest()

      dispatch(get{entity_capital_plural}Success(data))
    } catch (error) {
      dispatch(get{entity_capital_plural}Failure())
    }
  }
}
