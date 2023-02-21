//import du module http
const http = require('http');

//creation du serveur, fonction appelée par node.js  à chaque fois qu'une requete atteint le serveur
const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); -> ferme le programme
    //on précise au navigateur que le type d'élément renvoyé est du html
    res.setHeader('Content-Type','text/html');
    //écriture de contenu dans la réponse
    res.write('<html><head><title>Test</title></head><body><h1>Test</h1></body></html>');
    //fin de l'écriture
    res.end();
});

//http://localhost:3000
server.listen(3000);