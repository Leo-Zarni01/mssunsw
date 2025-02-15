import { Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import thadingyut from '../assets/images/img-thadingyut.jpg';
import { styled } from '@mui/material/styles';
import '../App.css';

const PastEventDetailsWovenPhotos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const mobilePositions = [
    { top: '7%', left: '-2%', width: '12%', height: '32%' },
    { top: '0%', left: '12%', width: '18%', height: '28%' },
    { top: '-2%', left: '32%', width: '20%', height: '10%' },
    { top: '-8%', left: '58%', width: '17%', height: '20%' },
    { top: '0%', left: '81%', width: '15%', height: '20%' },
    { top: '10%', left: '97%', width: '12%', height: '18%' },
    
    { top: '12%', left: '32%', width: '19%', height: '20%' },
    { top: '15%', left: '56%', width: '20%', height: '16%' },

    { top: '48%', left: '-5%', width: '12%', height: '17%' },
    { top: '42%', left: '8%', width: '16%', height: '26%' },
    { top: '48%', left: '77%', width: '18%', height: '20%' },
    { top: '23%', left: '80%', width: '14%', height: '19%' },
    { top: '34%', left: '97%', width: '10%', height: '30%' },

    { top: '72%', left: '-12%', width: '28%', height: '38%' },
    { top: '77%', left: '19%', width: '26%', height: '30%' },
    { top: '69%', left: '50%', width: '25%', height: '20%' },
    { top: '70%', left: '77%', width: '27%', height: '35%' },
    { top: '93%', left: '48%', width: '24%', height: '14%' },
  ];

  const tabletPositions = [
    { top: '7%', left: '-2%', width: '12%', height: '32%' },
    { top: '0%', left: '12%', width: '18%', height: '28%' },
    { top: '-2%', left: '32%', width: '20%', height: '10%' },
    { top: '-8%', left: '58%', width: '17%', height: '20%' },
    { top: '0%', left: '81%', width: '15%', height: '20%' },
    { top: '10%', left: '97%', width: '12%', height: '18%' },
    
    { top: '12%', left: '32%', width: '19%', height: '20%' },
    { top: '15%', left: '56%', width: '20%', height: '16%' },

    { top: '48%', left: '-5%', width: '12%', height: '17%' },
    { top: '42%', left: '8%', width: '16%', height: '26%' },
    { top: '48%', left: '77%', width: '18%', height: '20%' },
    { top: '23%', left: '80%', width: '14%', height: '19%' },
    { top: '34%', left: '97%', width: '10%', height: '30%' },

    { top: '72%', left: '-12%', width: '28%', height: '38%' },
    { top: '77%', left: '19%', width: '26%', height: '30%' },
    { top: '69%', left: '50%', width: '25%', height: '20%' },
    { top: '70%', left: '77%', width: '27%', height: '35%' },
    { top: '93%', left: '48%', width: '24%', height: '14%' },
  ];

  const desktopPositions = [
    { top: '7%', left: '-2%', width: '12%', height: '32%' },
    { top: '0%', left: '12%', width: '18%', height: '28%' },
    { top: '-2%', left: '32%', width: '20%', height: '10%' },
    { top: '-8%', left: '58%', width: '17%', height: '20%' },
    { top: '0%', left: '81%', width: '15%', height: '20%' },
    { top: '10%', left: '97%', width: '12%', height: '18%' },
    
    { top: '12%', left: '32%', width: '19%', height: '20%' },
    { top: '15%', left: '56%', width: '20%', height: '16%' },

    { top: '48%', left: '-5%', width: '12%', height: '17%' },
    { top: '42%', left: '8%', width: '16%', height: '26%' },
    { top: '48%', left: '77%', width: '18%', height: '20%' },
    { top: '23%', left: '80%', width: '14%', height: '19%' },
    { top: '34%', left: '97%', width: '10%', height: '30%' },

    { top: '72%', left: '-12%', width: '28%', height: '38%' },
    { top: '77%', left: '19%', width: '26%', height: '30%' },
    { top: '69%', left: '50%', width: '25%', height: '20%' },
    { top: '70%', left: '77%', width: '27%', height: '35%' },
    { top: '93%', left: '48%', width: '24%', height: '14%' },
  ];

  const imagePositions = isMobile 
    ? mobilePositions 
    : isTablet 
      ? tabletPositions 
      : desktopPositions;

  const ImageBox = styled(Box)({
    position: 'absolute',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
    },
  });

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: {
          xs: '400px',
          sm: '500px',
          md: '600px',
        },
        bgcolor: 'white',
        borderRadius: '0px',
        overflow: 'hidden',
      }}
    >
      {imagePositions.map((pos, index) => (
        <ImageBox
          key={index}
          sx={{
            top: pos.top,
            left: pos.left,
            width: pos.width,
            height: pos.height,
          }}
        >
          <Box
            sx={{
              height: '100%',
              borderRadius: '14px',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={thadingyut}
              alt={`Welcome ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
        </ImageBox>
      ))}

      <Box
        sx={{
          position: 'absolute',
          top: '49%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: {
              xs: '1rem',
              sm: '1.5rem',
              md: '2rem',
            }
          }}
        >
          Thadingyut Lightening Festival 2024
        </Typography>
        
        <Button
          variant="contained"
          sx={{
          backgroundColor: 'black',
          color: '#FFA700',
          padding: '10px 14px',
          fontSize: { xs: '0.7rem', sm: '0.9rem' },
          '&:hover': {
            backgroundColor: '#333333',
          },
        }}>
          Explore More Photos
        </Button>
      </Box>
    </Box>
    );
}

export default PastEventDetailsWovenPhotos;
