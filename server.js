process.loadEnvFile()   // esto permite a node acceder

const jsonServer = require("json-server")

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

server.use(middlewares)

const allowAccesFromAnywhere = (req, res, next) => {
res.header("Access-Control-Allow-Origin", "*")
next()
}

server.use(allowAccesFromAnywhere)

const router = jsonServer.router("db.json")

server.use(router)

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log("servidor andando")
    console.log(`Ejecutandose localmente en http://localhost:${PORT}`)
})

