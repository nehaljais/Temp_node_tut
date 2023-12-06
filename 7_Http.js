const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is a Homepage")
    }
    if(req.url==='/about'){
        res.end("This is about")
    }
    res.end(`
    <h1>oops
    <a href='/'>Back home</a>
    </h1>`);
 
})

server.listen(5000)