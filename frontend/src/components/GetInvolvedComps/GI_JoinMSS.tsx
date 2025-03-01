import { Button, Typography, Grid } from '@mui/material';

const GI_JoinMSS = () => {
    return (
        <Grid textAlign="center">
            <Typography variant="h5"
            sx={{
                marginTop: "0.5rem"
            }}
            >
                Join MSS
            </Typography>
            <Typography
            sx={{
                margin: "2rem",
                mx: "6rem",
            }}
            >
                Join the MSS family today, a home away from home! Becoming an MSS member
                entails various benefits such as money off event tickets, food, and MSS
                products.     
            </Typography>
            <Button variant="contained" color="primary" size="medium"
            onClick={() => window.open("https://tr.ee/57QyR10W54", "_blank")}
            sx={{
                backgroundColor: "black",
                color: "#FFA700",
                marginTop: "0.6rem",
                px: "1.5rem",
                py: "0.7rem",
                borderRadius: "11px",
                textTransform: "none",
                fontSize: "0.95rem"
            }}
            >
                    Be a Member Today!
            </Button>
        </Grid>     
    )
}

export default GI_JoinMSS;