const http = require('http');

const PORT = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
    res.end(req.url);
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
