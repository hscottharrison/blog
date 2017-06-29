module.exports = {
  Create: (req, res, next) => {
    var instance = req.app.get('db')

    instance.create_post([req.body.date, req.body.title, req.body.body])
    .then(() => {
      res.status(200).json('success!');
    }).catch(err => {
      console.log('There was an error!');
      return res.status(404).json(err);
    })
  },
  GetAll: (req, res, next) => {
    var instance = req.app.get('db')

    instance.get_posts().then(posts => {
      res.status(200).json(posts);
    }).catch(err => {
      console.log('There was an error!');
      return res.status(404).json(err);
    })
  }
}//end module.exports
