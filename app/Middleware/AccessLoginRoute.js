'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AccessLoginRoute {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth, response }, next) {

    try{
      await auth.check()
      return response.send("You are logged in")
    }catch(error){
      // igrone
    }

    await next()
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ socket, auth }, next) {
    // call next to advance the request
    if(await auth.check()){
      return socket.emit("notification", {status: "error", message: "You are logged in"})
    }

    await next()
  }
}

module.exports = AccessLoginRoute
