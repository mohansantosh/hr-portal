var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var passport = require("passport");
const User = require("../models/index")["User"];
const Role = require("../models/index")["Role"];
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
    },
    function (jwtPayload, cb) {
      return User.findOne({
        where: {
          id: jwtPayload.id,
          isActive: true,
        },
        include: Role,
      })
        .then((user) => {
          if (!user) {
            throw new Error("User is inactive/blocked. Cannot access endpoint");
          }
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

module.exports = passport;
