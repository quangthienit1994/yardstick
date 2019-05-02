'use strict'

class LoginController {
  constructor({ socket, request, auth }) {
    this.socket = socket
    this.request = request
    this.auth = auth
  }

  async onLogin(data) {
    
    try{
      ! await this.auth.check();
    }catch(error){
      return this.socket.emit("message", { status: "error", message: "your are logged in" });
    }

    try {

      const email = data.email

      const password = data.password

      const remember = Boolean(data.rememeber)

      await this.auth.remember(remember).attempt(email, password)

      this.socket.emit("message", { status: "success" });

    } catch (error) {
      this.socket.emit("message", { status: "error", message: "user or password not exists" });

    }
  }
}

module.exports = LoginController
