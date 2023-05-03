import { useAuth0 } from "@auth0/auth0-react";
import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { AUTH0_REDIRECT_URL } from "../../utils/urls";

export const Profile = () => {
    const { logout } = useAuth0();
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            sx={{mt: 5}}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horiontal: 'right'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={() => logout({logoutParams: {returnTo: AUTH0_REDIRECT_URL}})}>Logout</MenuItem>
            </Menu>
        </>
    );
};
