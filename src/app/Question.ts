import { Answer } from "./Answer";

export class Question{
    id:number;
    Question:string;
   // Answers:{ Answer1: string, Answer2: string, Answer3: string,Answer4:string };
  Answers: string[4];
    CorrectAnswer:string;
}