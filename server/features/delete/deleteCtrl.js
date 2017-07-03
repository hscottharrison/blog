module.exports = {
  Delete: (req, res, next) => {
    var instance = req.app.get('db');
    console.log(req.body.post_id)

    instance.delete_post([req.body.post_id])

    .then(() => {
      res.status(200).json('success!')
    }).catch(err => {
      console.log('There was an error!');
      return res.status(404).json(err);
    })
  }
}
