import React from 'react'

function Listado () {
  return (
    <>
      {/*Here Films*/}
      <article className="film-item">
        <h3 className="title">Web Development</h3>
        <p className="description">portfolio.es</p>

        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </article>
    </>
  )
}

export default Listado