import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetch{entity_capital_plural} } from '../actions/{entity_plural}Actions'

import { {entity_capital} } from '../components/{entity_capital}'

const {entity_capital_plural}Page = ({ dispatch, loading, {entity_plural}, hasErrors }) => {
  useEffect(() => {
    dispatch(fetch{entity_capital_plural}())
  }, [dispatch])

  const render{entity_capital_plural} = () => {
    if (loading) return <p>Loading {entity_plural}...</p>
    if (hasErrors) return <p>Unable to display {entity_plural}.</p>

    return {entity_plural}.map({entity} => <{entity_capital} key={{entity}.id} {entity}={{entity}} excerpt />)
  }

  return (
    <section>
      <h1>{entity_capital_plural}</h1>
      {render{entity_capital_plural}()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.{entity_plural}.loading,
  {entity_plural}: state.{entity_plural}.{entity_plural},
  hasErrors: state.{entity_plural}.hasErrors,
})

export default connect(mapStateToProps)({entity_capital_plural}Page)
