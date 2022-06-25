import React, { useEffect } from 'react'
import { GetFromStorage } from '../helpers/GetFromStorage'

function Listado ({listState, setListState}) {
  //const [listState, setListState] = useState([]);

  useEffect(() => {
    setListState(GetFromStorage('films'));
  }, []);

  const deleteFilm = (id) => {
    let films = GetFromStorage('films');

    let newListFilms = films.filter(film => film.id !== parseInt(id));
    setListState(newListFilms);
    localStorage.setItem('films', JSON.stringify(newListFilms));
  }

  return (
    <>
      {/*Here Films*/}
      {listState != null && listState.length > 0 ? listState.map(film => (
        <div key={film.id} className="film-item">
          <h3 className="title">{film.title}</h3>
          <p className="description">{film.description}</p>

          <button className="edit">Editar</button>
          <button onClick={() => deleteFilm(film.id)} className="delete">Eliminar</button>
        </div>
      )) : 
         <p className='emptyArraymsg'>No hay peliculas</p>
      }
    </>
  )
}

export default Listado