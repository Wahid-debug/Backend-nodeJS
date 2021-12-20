const userModel = require("../models/user");

const register = (req, res) => {
  const { email, phone, password } = req.body;
  const data = new userModel({
    fullName: req.body.fullName,
    email,
    phone,
    password,
  });
  data
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { register };
