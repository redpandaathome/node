//https://jwt.io/
const jwt = require("jsonwebtoken");

const secret = "yTTzR&QsT5nTAOEVC4vi%O0PxTiZPhsh";
//https://www.lastpass.com/features/password-generator
const token = jwt.sign(
  {
    id: "ellie",
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 }
);

console.log(`token:`, token);
const edited =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVsbGllIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjMwMDQ2MjgyfQ.XGvvUzbXt_fQ7uvYZYcoh0GLNp-nKwD3ptGJACqILpM";

//callback function...
// jwt.verify(edited, secret, (err, decoded) => {
//    console.log(`err, decoded:`, err, decoded);
// })
const expiredToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVsbGllIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYzMDA0NzI5MSwiZXhwIjoxNjMwMDQ3MjkzfQ.V1y_GFLXW2uCKSuJCnpgOJ3bF8fOY6IWyfy53iG2iGc";
jwt.verify(token, secret, (err, decoded) => {
  console.log(`err, decoded:`, err, decoded);
});

setTimeout(() => {
  jwt.verify(token, secret, (err, decoded) => {
    console.log(`err, decoded:`, err, decoded);
  });
}, 3000);
