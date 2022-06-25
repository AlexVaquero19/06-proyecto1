import { useState } from 'react'
import Create from "./components/Create";
import Listado from "./components/Listado";
import Search from "./components/Search";

function App() {
  const [listState, setListState] = useState([]);

  return (
    <div className="layout">
      {/*Header*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      {/*Navigation*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Main*/}
      <section className="content">
        {/*Here Films*/}
        <Listado 
          listState={listState}
          setListState={setListState}/>
      </section>

      <aside className="lateral">
        <Search />
        <Create setListState={setListState}/>
      </aside>

      {/*Footer*/}
      <footer className="footer">
        &copy; Máster en JavaScript ES12 y TypeScrtipt -<a href="https://alexvaquero19.github.io/portfolio/"> Alejandro Vaquero Toba</a>
      </footer>
    </div>
  );
}

export default App;
