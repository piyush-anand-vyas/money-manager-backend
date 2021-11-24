const jwt = require("jsonwebtoken");

const generateToken = id => {
  return jwt.sign({ id }, "874EWDISDK38EDUSKDJSKDJSD", { expiresIn: "30d" });
};

module.exports = generateToken;
