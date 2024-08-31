import http from 'node:http'
import { json } from './middlewares/json.js'


// rotas

// - criar usuarios
// - listam usuarios
// - edicao de usuarios
// - remocao de usuarios

// - http
//   - metodo http
//   - url

// GET, POST, PUT, PATCH, DELETE

// GET - Buscar uma recurso do back-end
// post - criar um recurso no back end
// put - atualizar um recurso no back-end
// patch - atualizar uma info especifica de um recurso no back-end
// delete - deltar um recurso

// Get /users = Buscando usuario do back-end
// Post /users = Criar um usuario no back-end

// Stateful - Stateless

// http Status code

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)


  if ( method === 'GET' && url === '/users') {
    return res
      .end(JSON.stringify(users))
  }

  // usa os dados na hora da criacao
  if (method === 'POST' && url === '/users') { 
    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email,
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)