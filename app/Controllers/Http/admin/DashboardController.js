'use strict'

class DashboardController {
    view({view}){
        return view.render("admin.dashboard")
    }
}

module.exports = DashboardController
