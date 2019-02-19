const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')
const PORT = 4000;

// Serve up public folder
const serve = serveStatic('public', { 'index': ['index.html', 'index.htm'] })

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

