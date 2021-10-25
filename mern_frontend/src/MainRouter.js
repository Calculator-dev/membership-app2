import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./core/Home"
import Users from "./user/Users"
import Profile from "./user/Profile"
import EditProfile from "./user/EditProfile"
import Signup from "./user/Signup"
import Signin from "./auth/Signin"
import PrivateRoute from "./auth/PrivateRoute"

const MainRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
                <Route exact path="/user/:userId" component={Profile} />
            </Switch>
        </>
    )
}

export default MainRouter;