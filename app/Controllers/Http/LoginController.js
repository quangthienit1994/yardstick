'use strict'

class LoginController {
    view({ view }) {
        return view.render("login")
    }
    async handleLogin({ auth, request, response, session }) {
        const payload = request.only(["email", "password"])
        return auth.attempt(payload.email, payload.password)
    }
}

module.exports = LoginController
