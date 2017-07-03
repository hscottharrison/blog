const postCtrl = require('./deleteCtrl')

module.exports = app => {
  app.delete('/api/delete', postCtrl.Delete);
}
