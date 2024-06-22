/*const http = require ('node:http');
const express= require('express');

/*const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});

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
  });*/
/*
  const express= require('express');

  //express app
  const app =express();

  //Get
  app.get('/', (req,res)=>{
    res.get({massage:'tou have a Get request'})
  })

  //Get single document
  app.get('/:id', (req,res)=>{
    res.get({massage:'tou have a single Get request'})
  })

  //Post
  app.post('/', (req,res)=>{
    res.send({massage:'tou have a Post request'})
  })

   //Delete
   app.delete('/:id', (req,res)=>{
    res.delete({massage:'tou have a Delete request'})
  })

  //Update
  app.patch('/:id', (req,res)=>{
    res.delete({massage:'tou have a Patch request'})
  })


  app.listen(3000,()=>{
    console.log('hello world')
  })




  module.exports =router */



  const http = require ('node:http')

  const server = http.createServer((req, res) => {
    const theStudent = {
      name :'supun',
      age :25,
      city: 'colombo'
  }
    
    //res.end(JSON.stringify(theStudent));

    if (req.url === '/'){
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>hi</h1>');
    } else if (req.url ==='/user'){
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>supun</h1>');
    } else if (req.url ==='/supun'){
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(theStudent));
    }
  });

  const hostname='localhost'
  const port =3000

  server.listen(port, hostname, () => {
    console.log('Listening on 127.0.0.1:3000');
  });
  