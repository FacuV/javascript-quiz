import { Question } from "../models/Question.js";
import { data } from "./data.js";

const questions = data.map(question =>
    new Question(question.question, question.choices, question.answer)
);

export default questions