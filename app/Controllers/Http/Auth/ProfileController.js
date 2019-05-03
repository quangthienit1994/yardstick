'use strict'

const _ = require("lodash")
const Profile = use("App/Models/User/Profile")


class ProfileController {
    /**
     * get profile
     * @param {*} param0 
     */
    async getProfile({ request, response, auth }) {
        try {
            const user = await auth.getUser()
            
            const profile = await user.profile().fetch()

            return response.json({ status: "success", data: {...profile.toJSON(), ...user.toJSON()} })

        } catch (error) {
            
            return response.json({ status: "error", message: "Your profile not exists", error: error.toString() })
            
        }
    }

    /**
     * update profile current logged user
     * @param {} param0 
     */
    async updateProfile({ request, response, auth }) {

        const data = request.only(["displayName", "photoURL", "phone", "address", "nation", "country", "language"]);

        try {
            const user = await auth.getUser()
            
            let profile = await user.profile().fetch()

            if (profile === null) {
                profile = new Profile();
                profile.user_id = user.id;
            }
            
            if(data && _.isObject(data)){
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const val = data[key];
                        profile[key] = val;
                    }
                }
            }

            await profile.save();

            return response.json({ status: "success" })
        } catch (error) {
            return response.json({ status: "error", message: "Your profile not exists", error: error.toString() })
        }
    }

    /**
     * delete current user
     * @param {} param0 
     */
    async deleteProfile({ request }) {

    }
}

module.exports = ProfileController
