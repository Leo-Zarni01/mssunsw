import { useTheme } from '@mui/material';
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return value.toString();
}

const CustomSliderStyles = (theme: any) => ({
  '& .MuiSlider-thumb': { color: "#FFA700" },
  '& .MuiSlider-track': { color: "#FFA700" },
  '& .MuiSlider-rail': { color: "#FA5043" },
  '& .MuiSlider-mark': { color: "#FFA700", width: 10, height: 10, borderRadius: "50%" },
  '& .MuiSlider-markLabel': { fontFamily: 'Poppins', fontSize: '1rem' },
  [theme.breakpoints.down('md')]: { '& .MuiSlider-thumb': { width: 14, height: 14 } },
  [theme.breakpoints.down('sm')]: { '& .MuiSlider-thumb': { width: 12, height: 12 } },
});

interface SliderProps {
  year: number;
  onYearChange: (newYear: number) => void;
}

export const SliderComponent: React.FC<SliderProps> = ({ year, onYearChange }) => {
  const years = [2025, 2024, 2023, 2022] // most recent
  const theme = useTheme();
  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      onYearChange(value)
    }
  }
  return (
    <>
      <Box sx={{ width: { xs: 250, sm: 350, md: 500 }, padding: { xs: 1, sm: 2 } }}>
        <Slider
          aria-label="Always Visible"
          defaultValue={2025}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={1}
          marks={years.map(year => ({ value: year, label: `${year}` }))}
          min={2022}
          max={2025}
          value={year}
          onChange={handleSliderChange}
          sx={CustomSliderStyles(theme)}
        />
      </Box>
    </>
  )
}
