;(function($){
    const ws = adonis.Ws().connect()

    ws.on("open", () => {
        console.log("Connected Ws")

        SubscribeLogin()
    })

    ws.on("notification", (message) => {
        console.log(message)
    })

    ws.on("error", () => {
        console.log("Error Ws")
    })

    function SubscribeLogin(){
        const login = ws.subscribe("login")

        const func = () => {

            login.on("message", (reponse) => {
                console.log(reponse)
            });
    
            $("#form-login").submit(function(e){
                e.preventDefault();
    
                const email = $(this).find("#email").val()
                const password = $(this).find("#password").val()
    
                login.emit("login", {email, password})
            });
        }

        login.on("open", () => {
            console.log("Connected login")
            func()
        })
        
        login.on("error", (error) => {
            console.log("Error Login Subscribe", error)
        })
    }

})(jQuery)