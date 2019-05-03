'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
    
  static get table() {
    return "profiles"
  }
  static get hidden() {
    return ["user_id", "id", "created_at", "updated_at"]
  }
}

module.exports = Profile
