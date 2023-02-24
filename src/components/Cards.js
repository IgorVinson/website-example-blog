import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";

const Cards = ({cards}) => {
    return (
        <Container maxWidth={"md"}>
            <Grid container spacing={2} justifyContent="center" marginTop={"16px"}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth: 350}}>
                            <CardMedia
                                sx={{height: 200}}
                                image="https://source.unsplash.com/collection/190727/600x400"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Cards;