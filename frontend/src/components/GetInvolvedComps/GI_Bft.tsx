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
                            <ListItemText primary="You’ll enjoy exclusive discounts on event
                            tickets, special sales, and free food—helping you save more when you attend and enjoy
                            our events regularly." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#8BB174", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="You’ll also receive email updates about upcoming events,
                            ensuring you never miss out on any exciting opportunities and experiences." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#EE6055", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Plus, we offer a welcome package that includes a uniquely designed
                            Burmese tote bag, a membership card, and delicious Burmese snacks (like Zee Yo)!" />
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
                    my: {xs: "1rem", md: "2rem"}, 
                }}
                >
                    <Typography variant="h5" sx={{color: "#8BB174", my: "1rem"}}>Team benefits</Typography>
                    <List sx={{textAlign: "left"}}>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#FFA700", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="You’ll gain valuable experience collaborate
                            effectively, and expanding your social and professional network for the future." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#8BB174", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="You’ll have the opportunity to enhance your leadership, communication,
                            and confidence by supporting MSS events and engaging with members." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: "#EE6055", fontSize: 20 }}/>
                            </ListItemIcon>
                            <ListItemText primary="Additionally, team members enjoy exclusive perks, including discounted
                            tickets, special sales, and occational team dinners as a token of appreciation." />
                        </ListItem>
                    </List>
                </Box>
                
            </Grid>
        </Grid>
    )
}

export default GI_Bft;