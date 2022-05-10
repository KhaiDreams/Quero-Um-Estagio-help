async function get(req, res) {
    res.send("FUNÇÃO GET_ALL");
}

async function post(req, res) {
    const values = req.body
    console.log(values)
    res.send("FUNÇÃO POST")
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
