const jwt = require("jsonwebtoken");

generateToken = (user) => {
    return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY);
}

module.exports.generateToken = generateToken;