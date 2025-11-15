import express from 'express';
const app=express();
import http from 'node:http';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

app.use(express.static("src/public"));
app.use(express.static("node_modules/socket.io/client-dist/"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer(app);

// const { Server } = require("socket.io");
import { Server } from "socket.io";
const io = new Server(server);

    
app.get("/chat",(req,res)=>{
    res.sendFile(__dirname + '/public/chat.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});
  
    
server.listen(3000,()=>{
    console.log(`App running at http://127.0.0.1:3000`);
});