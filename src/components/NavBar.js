import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const body = (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                minWidth: '300px',
            }}
        >
            <Typography variant="h6" gutterBottom>
                Login
            </Typography>
            <form noValidate autoComplete="off">
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        id="username"
                        label="Username"
                        variant="outlined"
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                        sx={{ ml: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex' }}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Image parser
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Button color="inherit" variant="outlined" onClick={handleOpen}>
                            Login
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            sx={{ ml: 2 }}
                        >
                            SignIn
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="login-modal-title"
                aria-describedby="login-modal-description"
            >
                {body}
            </Modal>
        </>
    );
};

export default NavBar;
