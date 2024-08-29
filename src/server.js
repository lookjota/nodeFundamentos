import http from 'node:http'


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

const server = http.createServer((req, res) => {
  const { method, url } = req

  if ( method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') { 
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    })

    return res.end('Criacao de usuario')
  }

  return res.end('Hello Worlds')
})

server.listen(3333)