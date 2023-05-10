module.exports = {
    insert: 'insert into userdata(username, password, steamid) VALUES(?,?,?)',  
    update: 'update userdata set name=?, sex=? where uid=?',  
    delete: 'delete from userdata where username=?',  
    queryByUrl: 'select * from imgcolor where url=?',  
    queryAll: 'select * from userdata'
}