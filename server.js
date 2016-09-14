const path = require('path');
const isDebug = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3030;
const devPort = port + 1;

require('powr/dev-server')({
  port: port,
  root: path.resolve(__dirname),
  app: path.resolve(__dirname, 'docs', 'app.js'),
  cssModules: false,
  alias: {
    'slate-mate': path.resolve(__dirname, 'lib'),
  },
  assets: [
    path.resolve(__dirname, 'docs', 'assets'),
  ],
  url: isDebug ? `http://localhost:${port}` : 'https://slate-mate.herokuapps.com',
}).listenAsync(port)
  .then(() => console.log('Listening on ', port))
  .catch(err => console.error(err));