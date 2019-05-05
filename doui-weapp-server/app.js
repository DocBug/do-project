const http = require('http')
const fs = require('fs')

let server = http.createServer(function(req, res) {
    let url = req.url
    if (url.endsWith('.png') || url.endsWith('.jpg')) {
        let rs = fs.createReadStream('.' + url)
        rs.pipe(res)
        rs.on('error', function() {})
    }
    if (url === '/api/swiperData') {
        let data = ['resource/images/1.jpg','resource/images/2.jpg','resource/images/3.jpg']
        res.write(JSON.stringify(data))
        res.end()
    }
}).listen(3000, function () {
    console.log('3000 端口开始监听')
});
