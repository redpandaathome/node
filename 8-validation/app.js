import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.post(
  "/users",
  [
    body("name")
      .isLength({ min: 2 })
      .withMessage("Name should be more than 2 letters!"),
    body("age").notEmpty().isInt().withMessage("Age must be number!"),
    body("email").isEmail(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("errors is not empty!");
      return res.status(400).json({ message: errors.array() });
    }
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  param("email").isEmail().withMessage("Wrong email form"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.send("💌");
  }
);

app.listen(8000);
