const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greeting</title></head>');
        res.write('<body><h1>Hello, welcome to my page</h1><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send User</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
    res.setHeader('Content-Type', 'text/html');
    return res.end();
}

exports.handler = requestHandler;
