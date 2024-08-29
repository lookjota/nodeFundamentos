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

const server = http.createServer((req, res) => {
  const { method, url } = req

  if ( method === 'GET' && url === '/users') {
    return res.end('Listagem de usuarios')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criacao de usuario')
  }

  return res.end('Hello World')
})

server.listen(3333)