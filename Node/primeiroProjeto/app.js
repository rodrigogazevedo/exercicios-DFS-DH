const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    switch (req.url) {
      case '/':
        res.end('Você está na página home!');
        break;
      case '/contato':
        res.end('Você está na página contato!');
        break;
      default:
        res.end('Você está no nosso servidor!');
    }
  })
  .listen(3000);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
//     switch (req.url) {
//       case '/':
//         res.end('Index');
//         break;
//       case '/contato':
//         res.end('Contato');
//         break;
//       default:
//         res.end('Sem resultados');
//         break;
//     }
//   })
//   .listen(3000);
