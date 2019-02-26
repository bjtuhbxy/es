const UserSQL = {
    insert: 'INSERT INTO User(uid,userName) VALUES(?,?)',
    queryAll: 'SELECT * FROM User',
    getUserById: 'SELECT * FROM user WHERE name = ?',
};
module.exports = UserSQL;
