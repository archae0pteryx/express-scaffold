module.exports = router => {
  router.get('/heartbeat', (req, res) => {
    res.send('thump thump')
  })
}
