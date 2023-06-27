import jwt from "jsonwebtoken";

export const createToken = () => {
  return jwt.sign(
    { id: "testuserID", email: "testuser@gmail.com" },
    "testuserSECRET",
    { expiresIn: "24h" }
  );
};
