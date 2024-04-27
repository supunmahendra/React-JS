const http = require ('node:http');

/*const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});*/

const server = http.createServer((req, res)=>{
    const theStudent = {
        name :'supun',
        age :25,
        city: 'colombo'
    }

    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.end(Jason.stringify(theStudent));
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1> hello world </h1>');
    } else if (req.url === '/user'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1> user data </h1>');
    }else if (req.url === '/student'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(theStudent));
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1> error </h1>');
    }
    

});







const hostname='localhost'
const port =3000

server.listen(port, hostname, () => {
    console.log('Listening on localhost:3000');
  });