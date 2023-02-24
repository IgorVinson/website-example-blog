
import {Button, Container, Grid, Typography,} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#cc1b41",
        },
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <main>
                <Slide/>
                <Container maxWidth={"sm"}>
                    <Typography variant="h3" align={"center"} color={"textPrimary"} gutterBottom>
                        Image parser
                    </Typography>
                    <Typography variant="h5" align={"center"} color={"textSecondary"} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                    </Typography>
                    <Container >
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Start parsing
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Learn more
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
                    <Cards cards={cards}/>
            </main>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
