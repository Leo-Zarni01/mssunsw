import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';

const GI_Bft = () => {
    return (
        <Grid container textAlign="center" sx={{marginTop: "2rem"}}>
            <Grid size={{xs: 12, md: 6}}>
                <Box
                sx={{
                    border: '1px solid black',
                    borderRadius: "40px",
                    padding: "1rem",
                    mx: {xs: "2rem", md: "4rem"},
                    my: {xs: "1rem", md: "2rem"} 
                }}
                >
                    <Typography variant="h5" sx={{color: "#EE6055", my: "1rem"}}>Member benefits</Typography>
                    <List sx={{textAlign: "left"}}>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#FFA700", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#8BB174", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#EE6055", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </ListItem>
                    </List>
                </Box>
                
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <Box
                sx={{
                    border: '1px solid black',
                    borderRadius: "40px",
                    padding: "1rem",
                    mx: {xs: "2rem", md: "4rem"},
                    my: {xs: "1rem", md: "2rem"}  
                }}
                >
                    <Typography variant="h5" sx={{color: "#8BB174", my: "1rem"}}>Team benefits</Typography>
                    <List sx={{textAlign: "left"}}>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#FFA700", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#8BB174", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#EE6055", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </ListItem>
                    </List>
                </Box>
                
            </Grid>
        </Grid>
    )
}

export default GI_Bft;