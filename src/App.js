import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Import Components
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ImageList from './components/ImageList/ImageList';


function App() {

  // Create State search
  const initialStateSearch = '';
  const [search, setSearch] = useState(initialStateSearch);

  // Create State search
  const initialStateImages = [];
  const [images, setImages] = useState(initialStateImages);

  // Create State paginado
  const initialStatePage = {
    current: 1,
    total: ''
  };
  const [pages, setPages] = useState(initialStatePage);

  // Create UseEffect
  useEffect( () => {

    requestApi(pages.current);

  }, [search, pages] );

  const requestApi = async (page) => {

    if(!search) return;

    const imagePerPage = 30;
    const apiKey = '15803043-978bced2111ab14505b5c7c22';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imagePerPage}&page=${page}`;

    try {
      const res = await axios.get(url);

      // Almacenar los datos de recibidos en nuestro State.
      const photos = res.data.hits;
      setImages(photos);

      // Calcular el total de paginas.
      const totalPages = Math.ceil(res.data.totalHits / imagePerPage);
      setPages({
        ...pages,
        total: totalPages
      });

      // Mover la pantalla hacia arriba
      const jumbotron = document.getElementById('jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
      console.log(error);
    }
    
  }

  const lastPage = () => {

    if( pages > 1 ) return;

    const newCurrent = pages.current --;

    setPages({
      ...pages,
      current: newCurrent
    })

  }

  const nextPage = () => {

    if( pages.current < pages.total ) return;

    const newCurrent = pages.current + 1;

    setPages({
      ...pages,
      current: newCurrent
    })

    console.log(pages.current)

  }
 
  return (
      <Fragment>
          <Header 
            search={search}
            setSearch={setSearch}
          />
          <div className="container">
            <div className="jumbotron" id="jumbotron">
              <p className="text-center h2 mb-4">
                Buscador de Imagenes
              </p>

              <Form 
                search={search}
                setSearch={setSearch}
              />
            </div>
          </div>

          <div className="row justify-content-center">
           <ImageList 
              images={images}
           />

          <button
              type="button"
              className="btn btn-info mr-1"
              onClick={lastPage}
            >
              &laquo; Anterior 
            </button>

      
          <button
              type="button"
              className="btn btn-info mr-1"
              onClick={nextPage}
            >
              Siguiente &raquo;
            </button>  
          </div>
      </Fragment>

  );
}

export default App;
