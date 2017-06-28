module.exports = {
  login: function(req, res, next){
    if(req.body.name === 'hunterharrison' && req.body.password === 'blogpassword'){
      return res.status(200).json({userFound: true});
    }
    return res.status(200).json({userFound:false});
  }
}
