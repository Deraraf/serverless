import http from 'http'

const app = http.createServer((req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify('hello'));
})

app.listen(4000,() => console.log('app running on port 4000'))