
import { Box, Typography } from '@mui/material';
const StayTuned = () => {
  return (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 100,
                boxShadow: 3,
                borderRadius: "20px",
                border: '1px #FCF6D7 solid',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography> Stay tuned for more events!!! </Typography>
            </Box>
          </Box>
  )
}

export default StayTuned;