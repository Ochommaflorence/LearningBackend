const http = require('http');

process.env.HOSTNAME;
const port = 7000;

const server = http.createServer((req, res) => {
    if (req.method !== "GET") return error(res, 405);
    if (req.url === "/techacademy") return techacademy(res);
    error(res, 404);
});

    function error(res, code) {
        res.statusCode = code;
        res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
    }
    
    function techacademy(res) {
        res.end('<h1>Welcome to tech Academy <h1>');
    }



    server.listen(port,  process.env.HOSTNAME , () => {
        console.log('We have agreed to resume by 7am',port);
    });



