const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

// Path to data.json
const filePath = path.join(__dirname, 'data.json')

const server = http.createServer((req, res) => {

  // Log every request
  console.log(`${req.method} ${req.url}`)

  // Read users from JSON file
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  // ---------------------------
  // GET /users
  // ---------------------------
  if (req.url === '/users') {

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    return res.end(JSON.stringify(users, null, 2))
  }

  // ---------------------------
  // GET /users/top
  // ---------------------------
  if (req.url === '/users/top') {

    const topUsers = users.filter(user => user.score >= 90)

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    return res.end(JSON.stringify(topUsers, null, 2))
  }

  // ---------------------------
  // GET /health
  // ---------------------------
  if (req.url === '/health') {

    const health = {

      status: 'ok',

      platform: os.platform(),

      memory: {
        totalMB: Math.round(os.totalmem() / 1024 / 1024),
        freeMB: Math.round(os.freemem() / 1024 / 1024)
      },

      uptime: process.uptime()

    }

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    return res.end(JSON.stringify(health, null, 2))
  }

  // ---------------------------
  // GET /users/:id
  // ---------------------------

  if (req.url.startsWith('/users/')) {

    const id = parseInt(req.url.split('/')[2])

    const user = users.find(u => u.id === id)

    if (!user) {

      res.writeHead(404, {
        'Content-Type': 'application/json'
      })

      return res.end(JSON.stringify({
        error: 'User not found'
      }))
    }

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    return res.end(JSON.stringify(user, null, 2))
  }

  // ---------------------------
  // Unknown Route
  // ---------------------------

  res.writeHead(404, {
    'Content-Type': 'application/json'
  })

  res.end(JSON.stringify({
    error: 'Route not found'
  }))

})

server.listen(3000, () => {

  console.log('Server running at http://localhost:3000')

})

/*

Health Check Route

Large applications expose /health endpoints so
monitoring tools like Docker, Kubernetes,
AWS Load Balancer and Azure can check whether
the application is healthy.

If /health returns status "ok",
the service is considered healthy.

*/