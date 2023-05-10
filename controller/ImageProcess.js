var mapper = require('../mapper/imgColorquery');

function getImgColor(req){
    var param = req.originalUrl
    imgurl=param.slice(10)
    let result = mapper.queryColor(imgurl)
    return result
}

module.exports = getImgColor


