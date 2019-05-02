'use strict'

const User = use("App/Models/User")

class RegisterController {
    view({ view }) {
        return view.render("register");
    }

    async register({ request }) {
        const { email, password } = request.post()
        try{
            await this.createUser({ email, password, role: "user" })
            return "success"
        }catch(error){
            return error.toString()
        }
    }

    async createUser(args) {
        const {email, password, role} = args

        const user = new User()

        user.email = email
        user.password = password
        user.role = role

        return await user.save()

    }
}

module.exports = RegisterController
