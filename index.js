const express =require("express")
const app = express()
const port = 3001
app.use(express.json())
const usuarios = []
app.post('/usuarios',(req, res)=>{
    const usuario = req.body //"pega" os dados da requisição
    usuarios.push(usuario) //adiciona o usuario na lista 
    res.send("Usuario cadastro com sucesso!")
})
app.get('/usuarios', (req, res)=>{
    res.send(usuarios)
})
app.listen(port, ()=>{
    console.log("API rodando...")
})

app.get('/ola', (req, res)=>{
    res.send("ola 3°DS!")
})