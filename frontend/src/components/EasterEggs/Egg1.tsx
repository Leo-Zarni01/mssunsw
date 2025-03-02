// import { useState } from "react";
// import IconEgg from "@mui/icons-material/Egg"; // Easter egg icon
// import { Button, Box } from "@mui/material";

// export default function HiddenButton() {
//   const [found, setFound] = useState(false);

//   return (
//     // <Box sx={{position: "absolute",
//     // left: "50%",
//     // transform: "translateX(-50%)"}}>
//     //   <Button
//     //     onClick={() => setFound(true)}
//     //     variant="contained"
//     //     color="primary"
//     //     sx={{
//     //       opacity: found ? 1 : 1,
//     //       transition: "opacity 0.5s",
//     //       borderRadius: "50%",
//     //       minWidth: "64px",
//     //       height: "64px",
//     //     }}
//     //   >
//     //     <IconEgg />
//     //   </Button>
//     // </Box>

// <Box
//   sx={{
//     position: "absolute",
//     left: "50%",
//     transform: "translateX(-50%)",
//   }}
// >
//   <Button
//     onClick={() => setFound(true)}
//     variant="contained"
//     color="primary"
//     sx={{
//       opacity: found ? 1 : 1,
//       transition: "opacity 0.5s",
//       borderRadius: "50%",
//       minWidth: "64px",
//       height: "64px",
//       backgroundImage: "url('/pyit.jpeg')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       transform: found ? "scale(1.2)" : "scale(1)", // Pop-up effect
//       // transition: "transform 0.3s ease-in-out", // Smooth pop-up animation
//     }}
//   >
//   </Button>
// </Box>

  
//   );
// }

import { useState } from "react";
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';

function HiddenButton() {
  const [found, setFound] = useState(false);

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: found ? 1.5 : 1, // Pop-up effect when found
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Button
          onClick={() => setFound(true)}
          variant="contained"
          color="primary"
          sx={{
            opacity: found ? 1 : 1,
            transition: "opacity 0.5s",
            borderRadius: "50%",
            minWidth: "64px",
            height: "64px",
            backgroundImage: "url('/pyit.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </Button>
      </motion.div>
    </Box>
  );
}

export default HiddenButton;
