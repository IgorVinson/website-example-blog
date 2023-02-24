import React from 'react';
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";

const Slide = () => {
    return (
        <Paper sx={{
            backgroundImage: `url(https://source.unsplash.com/random)`,
            position: "relative",
            color: "white",
            marginBottom: "32px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundOverlay: "rgba(0,0,0,0.3)",
        }}>
            <Container fixed>
                <Grid container>
                    <Grid item md={6}>
                        <Box sx={{position: "relative", padding: "24px"}}>
                            <Typography
                                component="h1"
                                variant="h3"
                                gutterBottom
                                color={"inherit"}>
                                Image parser
                            </Typography>
                            <Typography
                                variant="h5"
                                color={"white"}
                                paragraph
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                            <Button variant="contained" color="secondary">
                                Learn more
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Slide;