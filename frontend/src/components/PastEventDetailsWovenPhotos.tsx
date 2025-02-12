// import { Typography } from '@mui/material';

import { ImageList, ImageListItem, Typography } from "@mui/material";
import thadingyut from '../assets/images/img-thadingyut.jpg';


const PastEventDetailsWovenPhotos = () => {
  return (
    <>
      <ImageList  sx={{ width: '100vw', height: '460px' }} variant="woven" cols={5} gap={12}>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}> Fresher Welcome </Typography> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        <ImageListItem> <img src={thadingyut} loading="lazy" style={{ borderRadius: '12%' }}></img> </ImageListItem>
        
      </ImageList>
    </>
  )
}

export default PastEventDetailsWovenPhotos;
