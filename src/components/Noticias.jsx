import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { DialogContentText, Stack } from '@mui/material';



function Noticia({ noticia }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(noticia.likesIniciales);
  const [shareEnabled, setShareEnabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setShareEnabled(false);
    } else {
      setLikes(likes + 1);
      setShareEnabled(true);
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleWhatsAppShare = () => {
    console.log('Enviando por Whatsapp ...');
    handleCloseModal();
  };

  const handleTelegramShare = () => {
    console.log('Enviando por Telegram ...');
    handleCloseModal();
  };

  return (
 
    <Card sx={{ maxWidth: '100%' , margin: '20px' }}>
      <CardHeader
        avatar={<Avatar src={noticia.avatar} alt={`Avatar de ${noticia.titulo}`} />}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title={noticia.titulo}
        subheader={noticia.fecha}
      />
      
      <CardMedia
        component="img"
        height="194"
        image={noticia.imagen}
        alt={`Imagen de ${noticia.titulo}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {noticia.contenido}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleLike} aria-label="Me gusta">
          {liked ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography>{likes}</Typography>
        <IconButton disabled={!shareEnabled} onClick={handleShare} aria-label="Compartir">
          <ShareIcon />
        </IconButton>
      </CardActions>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Compartir Noticia</DialogTitle>
        <DialogActions>
        <DialogContentText>
        Indica que plataforma vas a usar para compartir esta notica
        </DialogContentText>
          <IconButton onClick={handleWhatsAppShare}>
            <WhatsAppIcon />
          </IconButton>
          <IconButton onClick={handleTelegramShare}>
            <TelegramIcon />
          </IconButton>
        </DialogActions>
        <Button onClick={handleCloseModal}>Cerrar</Button>
      </Dialog>
    </Card>

  );
}

export default Noticia;
