const jwt = require("jsonwebtoken");

const DEFAULT_EXPIRE = "7d";
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const parseDurationToMs = (duration) => {
  const match = duration.match(/^(\d+)([dhms])$/);
  if (!match) return 7 * MS_PER_DAY;

  const value = parseInt(match[1], 10);
  const unit = match[2];

  const multipliers = { d: MS_PER_DAY, h: 3600000, m: 60000, s: 1000 };
  return value * (multipliers[unit] || MS_PER_DAY);
};

const generateToken = (res, userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const expiresIn = process.env.JWT_EXPIRE || DEFAULT_EXPIRE;

  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn,
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: parseDurationToMs(expiresIn),
  });

  return token;
};

module.exports = generateToken;
