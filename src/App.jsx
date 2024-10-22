import React from 'react';
import Noticia from './components/Noticias';
import { Grid2, Container } from '@mui/material';  // Cambia Grid2 por Grid
import './App.css';
import avatar01 from './assets/avatar01.png';
import avatar02 from './assets/avatar02.png';
import avatar03 from './assets/avatar03.png';
import avatar04 from './assets/avatar04.png';
import mario from './assets/mario.jpg';
import sea from './assets/sea.jpg';
import sky from './assets/sky.jpg';
import tux from './assets/tux.jpg';

function App() {

  const noticias = [
    {
      id: 1,
      avatar: avatar01,
      alt_avatar: 'Esto es el avatar de la primera noticia',
      titulo: 'Noticia 1',
      fecha: '22 de octubre de 2024',
      imagen: sky,
      alt_imagen: 'Foto del cielo',
      contenido: 'Esta es la primera noticia.',
      likesIniciales: 28
    },
    {
      id: 2,
      avatar: avatar02,
      alt_avatar: 'Esto es el avatar de la segunda noticia',
      titulo: 'Noticia 2',
      fecha: '22 de octubre de 2024',
      imagen: sea,
      alt_imagen: 'Foto de atardecer',
      contenido: 'Esta es la segunda noticia.',
      likesIniciales: 17
    },
    {
      id: 3,
      avatar: avatar03,
      alt_avatar: 'Esto es el avatar de la tercera noticia',
      titulo: 'Noticia 3',
      fecha: '22 de octubre de 2024',
      imagen: tux,
      alt_imagen: 'Foto de Linux',
      contenido: 'Esta es la tercera noticia.',
      likesIniciales: 18
    },
    {
      id: 4,
      avatar: avatar04,
      alt_avatar: 'Esto es el avatar de la cuarta noticia',
      titulo: 'Noticia 4',
      fecha: '22 de octubre de 2024',
      imagen: mario,
      alt_imagen: 'Foto de Mario',
      contenido: 'Esta es la cuarta noticia.',
      likesIniciales: 17
    },
  ];

  return (
    <div className="App">
      <Container>
        <Grid2 container spacing={3} direction="column">
          {noticias.map((noticia) => (
            <Grid2 item xs={12} key={noticia.id}>
              <Noticia 
                noticia={noticia} 
                avatar={noticia.avatar}
                alt_avatar={noticia.alt_avatar}
                titulo={noticia.titulo}
                fecha={noticia.fecha}
                imagen={noticia.imagen}
                alt_imagen={noticia.alt_imagen}
                contenido={noticia.contenido}
                likesIniciales={noticia.likesIniciales}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
}

export default App;
