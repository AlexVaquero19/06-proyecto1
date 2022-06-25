import React, { useState } from 'react'
import { SaveOnStorage } from '../helpers/SaveOnStorage';

function Create ({setListState}) {
  const titleComponent = 'Añadir Película';

  const [film, setFilm] = useState({
    title: '',
    description: ''
  });

  const {title, description} = film;

  const getDataForm = (e) => {
    e.preventDefault();

    //Get Data from Form
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Crete an object of film we are going to add
    let filmData = {
      id: new Date().getTime(),
      title: title,
      description: description
    };

    setFilm(filmData);

    setListState(elements => {
      if(Array.isArray(elements)){
        return [...elements, filmData];
      }
    });

    //Save on local storage
    SaveOnStorage('films', filmData);
  }

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      
      <strong>{(title && description) && "Has creado la peli: " + title}</strong>

      <form onSubmit={getDataForm}>
        <input type="text" name="title" placeholder="Titulo..." />
        <textarea name="description" cols="30" rows="10" placeholder="Description..."></textarea>
        <input type="submit" value="Guardar"/>
      </form>
    </div>
  )
}

export default Create