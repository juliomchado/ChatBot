import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Confirm from './pages/ConfirmRegister/ConfirmRegister'
import Reset from './pages/ResetPassword/ResetPassword'
import ResetConfirm from './pages/ResetConfirm/ResetConfirm'

export default Routes => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/confirm" exact component={Confirm} />
                <Route path="/reset" exact component={Reset} />
                <Route path="/resetConfirm" exact component={ResetConfirm} />
            </Switch>
        </BrowserRouter>

    )
}



