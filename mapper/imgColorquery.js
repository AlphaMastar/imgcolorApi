var sql = require('../config/sql');
var db = require('../config/db');

module.exports = {
    results: null,
    queryColor(param){
        // 数据库查询
        db.query(sql.queryByUrl,param, (err, data) => {
            var dataString = JSON.stringify(data[0],['RGB']);
            if (err) return this.results = '1' ; // 连接失败
            if (data.length === 0) return this.results = '0' ; // 数据长度为0 则没有获取到数据
            this.results = dataString;
        });
        return this.results;
    }
}