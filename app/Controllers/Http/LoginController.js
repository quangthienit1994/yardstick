'use strict'

class LoginController {
    view({ view }) {
        return view.render("login")
    }
    async handleLogin({ auth, request, response, session }) {
        const data = request.post()

        session.flashOnly(["email"])

        try {

            const email = data.email

            const password = data.password

            const remember = Boolean(data.rememeber)

            await auth.remember(remember).attempt(email, password)

            return "success"

        } catch (error) {

            console.log(error)

            // send errors
            session.flash({error: error.toString()})

            // redirect
            response.status(403).redirect("login")

        }
    }
}

module.exports = LoginController
