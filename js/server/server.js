const http = require('http')
const PORT = 8080

let advertsArr = null

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Mrthods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // POST
    if (req.method === 'POST' && req.url === '/offert') {
        let body = ''
        console.log(req.method)

        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            try {
                const parseData = JSON.parse(body)
                advertsArr = parseData
                if (typeof (parseData) != 'object') {
                    console.log('!arr')
                    res.writeHead(400, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: 'wait Array' }))
                }
                advertsArr = parseData
                console.log(req.url)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify(parseData))

            } catch (error) {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({ error: 'error' }))
            }
        });
        return;
    } else if(req.method === 'POST' && req.url === '/offer'){
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', ()=> {
            const newAdvert = JSON.parse(body) 
            newAdvert.id = advertsArr.length + 1
            advertsArr.push(newAdvert)
            return res.end(JSON.stringify(advertsArr))
        })
    } else if (req.method === "GET") {
        if (advertsArr) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(advertsArr))
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('not objekt')
        }
    }
    res.end();
}).listen(PORT)
