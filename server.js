const http = require("http");
const config = require("./config");
const port = config.port;

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') return res.end("Please send a GET\n");

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    console.log(new Date().toUTCString() + ' Request');
    config.interval;
    let intervalId = setInterval(() => {
        console.log(new Date().toUTCString()), config.interval;
    }, config.interval);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log(new Date().toUTCString() + ' Stop');
        res.end('<strong>текущая дата и время отключения в формате UTC: </strong> ' + new Date().toUTCString() + '.');
    }, config.exit);
});

server.listen(port, () => {
    console.log("Server started..., port: " + server.address().port);
});

server.on("error", (err) => {
    if (err.code === "EACCES") {
        console.log(`No access to port: ${port}`);
        process.exit(1);
    }
});