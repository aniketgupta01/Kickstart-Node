const http= require('http');
const server=http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.setHeader('Content-type','text/html')
        res.write('<html>');
        res.write('<head></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        res.end();
    }
    else if(req.url === '/about'){
        res.setHeader('Content-type','text/html')
        res.write('<html>');
        res.write('<head></head>')
        res.write('<body><h1>Welcome to About Us Page</h1></body>')
        res.write('</html>')
        res.end();
    }
    else if(req.url === '/node'){
        res.setHeader('Content-type','text/html')
        res.write('<html>');
        res.write('<head></head>')
        res.write('<body><h1>Welcome to our Node Project</h1></body>')
        res.write('</html>')
        res.end();
    }
    else{
        res.setHeader('Content-type','text/html')
        res.write('<html>');
        res.write('<head></head>')
        res.write('<body><h1>WRONG DOMAIN NAME</h1></body>')
        res.write('</html>')
        res.end();
    }
})
server.listen(4000)