const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req, res) {
    let url = req.url
    if (url === '/api/swiperData') {
        let images = []
        for(let i = 0; i < 3; i++) {
            fs.readFile(`./resource/images/${i+1}.jpg`, (err, data) => {
                if (err) throw err;
                images.push(data);
            })
        }
        res.write(JSON.stringify(images));
    }
});

server.listen(3000, function () {
    console.log('3000 端口开始监听')
});
