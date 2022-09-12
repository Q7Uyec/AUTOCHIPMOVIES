const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Access denied')
    err.status = 4