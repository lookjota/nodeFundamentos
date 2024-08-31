export async function json(req, res) {
    //conceito de leitura de streams
    const buffers = []

    for await (const chunk of req) {
      buffers.push(chunk)
    }
  
    // transforma em javaScript
    try {
      req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
      req.body = null
    }

    res.setHeader('Content-type', 'application/json')
}