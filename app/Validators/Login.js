'use strict'

class Login {
  get validateAll() {
    return true
  }
  
  get rules() {
    return {
      "email": "required|email",
      "password": "required|min:5|max:100"
    }
  }
  
  get messages() {
    return {
      "email.required": "Email is required",
      "email.email": "Email is incorret",
      "password.required": "Password is required"
    }
  }
}

module.exports = Login
