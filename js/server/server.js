import { cardsArr } from './data.js'
import http from 'http';

const PORT = 8080

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if(req.method === 'POST' && req.url === '/offers'){
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', ()=> {
            try {
                const offer = JSON.parse(body)
                
                offer.id = cardsArr.length + 1
                cardsArr.push(offer)
    
                res.writeHead(201, {
                    'Content-Type': 'application/json'
                })
                return res.end(JSON.stringify(cardsArr))
    
            } catch(error) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                })
    
                return res.end(JSON.stringify({
                    error: "Invalid JSON"
                }))
            }
        })

        return
    } else if (req.method === "GET" && req.url === '/offers' ) {
        if (cardsArr) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(cardsArr))
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('not objekt')
        }
    }
        
    res.end();
}).listen(PORT)
