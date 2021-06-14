const express = require('express');
const server = express();

server.use(express.urlencoded({extended: false}));

server.get('/', (req, res) => { 

    const html = 
    `<form method="POST" action = "/html_form_sent">
        <input type = "text" name = "send">
        <button type = "submit">send</button>
    </form>`

    res.send(html)
});

server.post('/html_form_sent', (req, res) => { 
    res.send('Data was sent successfully')
    console.log(req.body.send)
});

server.listen(8000, () => {})
