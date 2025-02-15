import { Typography, Button, Box } from '@mui/material';
import thadingyut from '../assets/images/img-thadingyut.jpg';
import { styled } from '@mui/material/styles';
import '../App.css';

const PastEventDetailsWovenPhotos = () => {

  const imagePositions = [
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

  const ImageBox = styled(Box)({
    position: 'absolute',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
    },
  });

  const StyledButton = styled(Button)({
    backgroundColor: 'black',
    color: '#FFA700',
    padding: '10px 14px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#333333',
    },
  });

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '600px',
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
              width: { xs: '90%', md: '100%' },
              height: '100%',
              borderRadius: '20px',
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
            fontSize: '1,3rem'
          }}
        >
          Thadingyut Lightening Festival 2024
        </Typography>
        
        <StyledButton variant="contained">
          Explore More Photos
        </StyledButton>
      </Box>
    </Box>
    );
}

export default PastEventDetailsWovenPhotos;
