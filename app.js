const express = require("express")
const path = require("node:path")

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/home.html"))
})

const port = 3030
app.listen(port, ()=>{
	console.log(`Servidor corriendo en http://localhost:${port}`)
})