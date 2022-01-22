const http = require('http')

const server = http.createServer((req,res)=>{

  const number = Math.random();

  const accept = req.headers.accept;

  return accept === 'application/json' ? res.end(JSON.stringify({number}))

: res.end(number.toString())
})

server.listen(8000,()=>{
  console.log('Server listening at 8000')
})