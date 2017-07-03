const loginRoute = require('./features/login/loginRoute');
const postRoute = require('./features/post/postRoutes');
const deleteRoute = require('./features/delete/deleteRoute');



module.exports = app => {
  loginRoute(app);
  postRoute(app);
  deleteRoute(app);
}
