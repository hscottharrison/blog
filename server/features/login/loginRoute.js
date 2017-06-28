const loginCtrl = require('./loginCtrl');

module.exports = app => {
  app.get('/api/login', loginCtrl.login)
}
