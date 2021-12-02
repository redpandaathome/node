import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

// ✨✨✨✨✨ cmd+click post -> ...handlers: Array
app.post(
  "/users",
  body("name")
      .trim()
      .notEmpty()
      .withMessage("name can't be empty")
      .isLength({ min: 2 })
      .withMessage("Name should be more than 2 letters!"),
  (req, res, next) => {
   const errors = validationResult(req);
   if(errors.isEmpty){
      console.log(req.body);
      res.sendStatus(201);
   } else {
      res.status(400).json({ message: errors.array()[0].msg });
   }
  }
);

app.get(
  "/:email",
  param("email").isEmail().withMessage("Wrong email form"),
  (req, res, next) => {
   const errors = validationResult(req);
   if(errors.isEmpty){
    // don't forget to return here! ✨
      return res.send("💌");
  } 
   res.status(400).json({messgae:errors.array()[0].msg})
);

app.listen(8000);
