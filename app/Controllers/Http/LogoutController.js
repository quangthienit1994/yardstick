'use strict'

class LogoutController {
    async handleLogout({auth}){
        await auth.logout();
        return "success";
    }
}

module.exports = LogoutController
