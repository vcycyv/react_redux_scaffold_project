import React from 'react'
//import { Link } from 'react-router-dom'

export const {entity_capital} = ({ {entity}, excerpt }) => (
  <article className={excerpt ? '{entity}-excerpt' : '{entity}'}>
    <h2>{{entity}.title}</h2>
    <p>{excerpt ? {entity}.body.substring(0, 100) : {entity}.body}</p>

    {/*excerpt && (
      <Link to={`/{entity_plural}/${{entity}.id}`} className="button">
        View {entity_capital}
      </Link>
    )*/}
  </article>
)
