'use strict'

class register {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      "email": "required|email",
      "password": "required|min:5|max:100",
      "password-cf": "required|min:5|max:100|same:password",
    }
  }
  
  get messages() {
    return {
      "email.required": "Email is required",
      "email.email": "Email is incorret",
      "password.required": "Password is required",
      "password.same": "Confirm password incorret"
    }
  }
}

module.exports = register
