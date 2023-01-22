const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const PORT = 8000
const cors = require('cors')
require('dotenv').config()
const io = new Server(server, {
    cors: '*',
    methods: '*'
})

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

server.listen(PORT, ()=> {
    console.log('server running at port ' + PORT)
})