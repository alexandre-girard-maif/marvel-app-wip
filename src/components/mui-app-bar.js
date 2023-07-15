import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@/Link';
import CompareIcon from '@mui/icons-material/Compare';

export default function MuiAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Marvel App - Characters
                    </Typography>
                    <IconButton variant="contained" aria-label="go to classic app" component={Link} noLinkStyle href="/">
                        <CompareIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
