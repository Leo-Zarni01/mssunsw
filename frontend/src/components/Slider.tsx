import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return value.toString();
}

const CustomSliderStyles = {
  '& .MuiSlider-thumb': {
    color: "#FFA700"
  },
  '& .MuiSlider-track': {
    color: "#FFA700"
  },
  '& .MuiSlider-rail': {
    color: "#acc4e4"
  },
  '& .MuiSlider-active': {
    color: "#f5e278"
  },

  '& .MuiSlider-markLabel': {
    fontFamily: 'Poppins',
    fontSize: '1rem',
  },
};

export const SliderComponent = () => {
  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018] // most recent
  return (
    <>
      <Box sx={{ width: 1000 }}>
        <Slider
          aria-label="Always Visible"
          defaultValue={2025}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={1}
          marks={years.map(year => ({ value: year, label: `${year}` }))}
          min={2018}
          max={2025}
          sx={CustomSliderStyles}
        />
      </Box>
    </>
  )
}
