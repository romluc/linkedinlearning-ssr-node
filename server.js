const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/page2', (request, response) => {
    return app.render(request, response, '/components/page2');
  });

  server.get('*', (request, response) => {
    return handle(request, response);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server ready on http://localhost:${port}`);
  });
});
