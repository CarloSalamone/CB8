const auth = (req, res, next) => {
  const username = req.query.username;

  if (username !== "admin") {
    res.status(401).send("Ho detto di cliccare solo se sei admin!");
  }

  next();
};

module.exports = auth;
