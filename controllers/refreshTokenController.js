const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { Admin } = require("../config/roles_list");

const handleRefreshToken = async (req, res) => {
  const foundUser = await User.findOne({ email: "admin@gmail.com" }).exec();
  if (!foundUser) return res.sendStatus(403);

  const fullname = `${foundUser.firstname} ${foundUser.lastname}`;
  const email = foundUser.email;

  res.json({
    accessToken: "sampleToken",
    roles: [0, 5678, 0, 0, 0, 0],
    fullname,
    email,
  });
};

module.exports = { handleRefreshToken };
