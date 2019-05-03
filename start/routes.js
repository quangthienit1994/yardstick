'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get("/home", "UserController.home")

Route.get("/login", "LoginController.view")

Route
.post("/login", "LoginController.handleLogin")
.validator("Login")
.middleware(["login"])
.as("login");

Route.get("/register", "RegisterController.view")
Route.post("/register", "RegisterController.register")
.validator("Register")
.as("register")

Route.get("/logout", "LogoutController.handleLogout")

Route.group(() => {
    Route.get("/dashboard", "admin/DashboardController.view")
}).prefix("/admin")

Route.group(() => {
    Route.post("/login", "LoginController.handleLogin")
    Route.get("/profile", "Auth/ProfileController.getProfile")
    Route.post("/profile", "Auth/ProfileController.updateProfile")
}).prefix("/api/v1")