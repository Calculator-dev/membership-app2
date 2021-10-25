import { AppBar, Toolbar, Typography, IconButton, Button, CssBaseline } from "@material-ui/core";
import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import auth from "../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) =>
    history.location.pathname == path ? { color: "#FF4081" } : { color: "#FFFFFF" }

const Menu = ({ history }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">MERN Skeleton</Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon />
                </IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>
            {
                !auth.isAuthenticated() && (<span>
                    <Link to="/signup">
                        <Button style={isActive(history, "/signup")}>Sign up</Button>
                    </Link>
                    <Link to="/signin">
                        <Button style={isActive(history, "/signin")}>Sign in</Button>
                    </Link>
                </span>)
            }
            {
                auth.isAuthenticated() && (<span>
                    <Link to={"/user/" + auth.isAuthenticated().user._id}>
                        <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
                    </Link>
                    <Button color="inherit" onClick={() => { auth.clearJWT(() => history.push('/')) }}>Sign Out</Button>
                </span>)
            }
        </Toolbar>
        <CssBaseline />
    </AppBar>
)
export default withRouter(Menu);