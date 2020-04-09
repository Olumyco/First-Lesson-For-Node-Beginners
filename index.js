const http = require('http');
const port = 3000;

let server = http.createServer(function(request, response) {
    if (request.url === '/') {
        let html = `<!DOCTYPE html>
                <html>
                    <head>
                    <title>Node Server Testing</title>
                    </head>
                    <body>
                        <h1>A Simple Server In Node</h1>
                        <p>I have just learnt to write a simple server that sends html in node</p>
                    </body>
                </html>
                `;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    } else if (request.url === '/aaa') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head>');
        response.write('<title>');
        response.write('Testing');
        response.write('</title>');
        response.write('</head>');
        response.write('<body>');
        response.write('<h1>Hello Node</h1>');
        response.write('<p>Node is cool for building server side applications</p>');
        response.write('</body>');
        response.write('</html>');
        response.end();   
    } else if (request.url === '/jsonData') {
        let data = {
            name: 'Andrew Jack',
            age: 15,
            married: false
        }
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(data));
        response.end();
    } else if (request.url === '/plainData') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('<h2>404 Page Not Found!</h2>');
    }
});

server.listen(port, function() {
    console.log('Server running on port ' + port);
});
