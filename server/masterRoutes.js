const loginRoute = require('./features/login/loginRoute');
const postRoute = require('./features/post/postRoutes');



module.exports = app => {
  loginRoute(app);
  postRoute(app);
}
