module.exports = {
  login: function(req, res, next){
    var instance = req.app.get('db')
    var username = req.body.name;
    var password = req.body.password;
    console.log(username)
    console.log(password)
    instance.get_users()
    .then(function(user){
      
      if(username == user[0].username && password == user[0].password){
        return res.status(200).json({userFound: true});
      }
      else{
        return res.status(200).json({userFound: false});
      }
    }).catch(err => {
      console.log('There was an error!');
      return res.status(404).json(err);
    })
  }
}
