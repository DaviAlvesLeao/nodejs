const http = require('http');

const server = http.createServer((req, res) => {

    let category = req.url;

    if (category === '/tecnology') {
        res.end(" <html><body>Noticias de tecnologia</body></html>");
    }else{
      res.end("<html><body>Portal de noticias a</body></html>");
    }


}).listen(3000);

