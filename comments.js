// Create web server
// Create a web server that listens on port 3000 and serves a JSON object with the following structure:
// {
//     "comments": [
//         {
//             "username": "Alice",
//             "comment": "I love your blog!",
//             "timestamp": "2019-01-01T12:00:00Z"
//         },
//         {
//             "username": "Bob",
//             "comment": "Just what I was looking for.",
//             "timestamp": "2019-01-02T12:00:00Z"
//         }
//     ]
// }

// For example, if you run the server and visit http://localhost:3000, you should see the JSON object above.

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        comments: [
            {
                username: 'Alice',
                comment: 'I love your blog!',
                timestamp: '2019-01-01T12:00:00Z'
            },
            {
                username: 'Bob',
                comment: 'Just what I was looking for.',
                timestamp: '2019-01-02T12:00:00Z'
            }
        ]
    }));
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});