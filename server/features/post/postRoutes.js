const postCtrl = require('./postCtrl')

module.exports = app => {
  app.get('/api/posts', postCtrl.GetAll);
  app.post('/api/posts', postCtrl.Create);
}
