const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');
const express = require('express');

var movie_webm, movie_mp4, movie_ogg;
console.log(__dirname, path.resolve(__dirname, 'practisce1.mp4'));
const currentVideoPath =path.resolve(__dirname, 'practisce1.mp4');
const LiveDrivePath = 'https://drive.google.com/uc?export=download&id=1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x';
const LiveDrivePath1 = 'https://drive.google.com/file/d/1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x/view?usp=sharing';
var LDP1 = 'https://drive.google.com/uc?export=download&id=1U450PgEK8EwV4a5gx_Qp433JL5OZyZLj';
var LDP11 = 'https://drive.google.com/open?id=1U450PgEK8EwV4a5gx_Qp433JL5OZyZLj';
fs.readFile(path.resolve(__dirname, 'practisce1.mp4'), function (e, d) {
    if (e) {
        throw e;
    }
    movie_mp4 = d;
});
console.log(movie_mp4);
const app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    const path = 'https://drive.google.com/uc?export=download&id=1U450PgEK8EwV4a5gx_Qp433JL5OZyZLj';
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  });
const port = 3001;
app.listen(port, () => {
    console.log(`Server has been Started on ${port}`);
});

// fs.readFile(path.resolve(__dirname,'practisce1.ogg'),function(e,d){
//     if(e){
//         throw e;
//     }
//     movie_ogg = d;
// });
// fs.readFile(path.resolve(__dirname,'practisce1.webm'),function(e,d){
//     if(e){
//         throw e;
//     }
//     movie_webm = d;
// });
// http.createServer(function (req, res) {
//     // Serve Client Files.
//     var total;
//     // if(reqResource == '/movie.mp4'){
//     total = movie_mp4.length;
//     // }
//     // if(reqResource == '/movie.ogg'){
//     //     total = movie_ogg.length;
//     // }
//     // if(reqResource == '/movie.webm'){
//     //     total = movie_webm.length;
//     // }
//     console.log(req);
//     console.log(req.headers);
//     console.log(req.headers.range);
    
//     // var range = req.headers.range;
//     // console.log(typeof range,range);
//     // var positions = range.replace(/bytes=/,"").split('-');
//     // var start = parseInt(positions[0],10);
//     // var end = positions[1] ? parseInt(positions[1],10):total-1;
//     // var chunksize = (end - start)+1;
//     // // if(reqResource == '/movie.mp4'){
//     //     res.writeHead(206,{
//     //         "Content-Range": "bytes " + start + "-" + end + "/" + total,
//     //         "Accept-Ranges": "bytes",
//     //         "Content-Length": chunksize,
//     //         "Content-Type": "video/mp4"
//     //     });
//     //     res.end(movie_mp4.slice(start,end+1),'binary');

//     // // }
//     // "Content-Range": "bytes " + start + "-" + end + "/" + total,
//     // "Accept-Ranges": "bytes",
//     // "Content-Length": chunksize,
//     var movieStream = fs.createReadStream(currentVideoPath);
//     movieStream.on('open', function () {
//         res.writeHead(206, {
           
//             "Content-Type": "video/mp4"
//         });
//         // This just pipes the read stream to the response object (which goes 
//         //to the client)
//         movieStream.pipe(res);
//     });

//     movieStream.on('error', function (err) {
//         res.end(err);
//     });
// }).listen(3001);
