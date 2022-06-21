import React from 'react'

function Search () {
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>

      <form>
        <input type="text" name="search" placeholder="Buscar..." />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  )
}

export default Search