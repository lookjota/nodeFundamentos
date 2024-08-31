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

// http Status code

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req


  //conceito de leitura de streams
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  if ( method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

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