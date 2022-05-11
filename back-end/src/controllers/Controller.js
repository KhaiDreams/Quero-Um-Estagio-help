const User = require("../models/User") 

async function get(req, res) {
    res.send("FUNÇÃO GET_ALL");
}

async function post(req, res) {
    const data = req.body
    console.log(data)

    let user = new User(data)
    user = await user.registerUser()
        .then(() => res.send("User registered successfully!"))
        .catch(err => res.send(`Failed to register user - ERROR: ${err}`))
}

async function put(req, res) {
    res.send("FUNÇÃO PUT")
}

async function del(req, res) {
    res.send("FUNÇÃO DELETE")
}

module.exports = {
    get,
    post,
    put,
    del,
}
