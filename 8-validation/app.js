import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

// ✨✨✨
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // ✨✨✨
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

// ✨✨✨✨✨ cmd+click post -> ...handlers: Array
app.post(
  "/users",
  [
    body("name")
      //💜 sanitization - trim; aware of orders(trim->isLength)
      .trim()
      .isLength({ min: 2 })
      .withMessage("Name should be more than 2 letters!"),
    body("age").notEmpty().isInt().withMessage("Age must be number!"),
    //💜 sanitization - normalizeEmail
    body("email").isEmail().normalizeEmail(),
    // ✨✨✨
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("Wrong email form"), validate],
  (req, res, next) => {
    res.send("💌");
  }
);

app.listen(8000);
