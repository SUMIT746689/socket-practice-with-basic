
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){ res.sendFile('C:/NEW JAVASCRIPT IN 2022/Node Practice 2022/Practice12-soket.io/index.html'
);
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
   console.log('A user connected');
   
    // setTimeout(function(){
    //     socket.send('Sent a message 4seconds after connection!');
    // }, 4000);
    socket.on('clientEvent', function(data){
        console.log(data);
        io.sockets.emit('broadcast',data);
     });
     
   socket.emit('serverEvent',{message :'server message'});
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
   
});


http.listen(3000, function(){
   console.log('listening on *:3000');
});