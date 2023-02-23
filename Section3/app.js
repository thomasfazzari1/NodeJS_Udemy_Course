//import du module http
const http = require('http');
//file system
const fs = require('fs');

//creation du serveur, fonction appelée par node.js  à chaque fois qu'une requete atteint le serveur
const server = http.createServer((req,res) => {
    const url = req.url;
    //process.exit(); -> ferme le programme
    if(url === '/'){
        //écriture de contenu dans la réponse
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Envoyer</button></form></body>');
        res.write('</html>');
        //fin de l'écriture
        return res.end();
    }

//33. redirecting requests
    if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    //on précise au navigateur que le type d'élément renvoyé est du html
    res.setHeader('Content-Type','text/html');
    //écriture de contenu dans la réponse
    res.write('<html>');
    res.write('<head><title>Section 3</title></head>');
    res.write('<body><h1>Section 3</h1></body>');
    res.write('</html>');
    //fin de l'écriture
    res.end();
});

//http://localhost:3000
server.listen(3000);