import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  

  constructor(private service:QuestionService,private formBuilder: FormBuilder) { }
  jQuestionForm:FormGroup;
  questions:Question[];
  indQ1:Question;
  indQ2:Question;
  indQ3:Question;
  indQ4:Question;
  result:number=0;
  chkFlag=false;
  correctAns1:string;
  correctAns2:string;
  correctAns3:string;
  correctAns4:string;
  ans:string[];
  noOfQuestions:number;
  QuestionData:{ id: number, Question: string, Answers: string[4]}[];

  ngOnInit(): void {
    this.jQuestionForm= this.formBuilder.group({
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    });
  
  
  console.log("hello");
    
  console.log("length of return ");
  const data = this.service.getJSON("JSP");

   data.forEach(
     obj => {
       Object.entries(obj).forEach(([key, value]) => {
           console.log(":::"+value.Question+`${key} ${value}`);
           this.noOfQuestions=obj.length;
           this.indQ1=obj[0];
           this.indQ2=obj[1];
           this.indQ3=obj[2];
           this.indQ4=obj[3];
         //  this.firstQ=obj[0];
//this.ans=obj[0].Answers;
//console.log("==="+obj[0].);
           console.log("==="+this.indQ3.Answers[1]);
       });
       console.log('-------------------'+obj.length);
   });
  // this.service.getAllQuestions().subscribe(u=>this.questions=u);
  this.service.getJSON("JSP").subscribe(data => this.QuestionData=data);
  
 }

 evaluate()
 {
  // alert("hello");
   this.chkFlag=true;
  // alert(JSON.stringify(this.questionForm.controls['answer1'].value))
  // alert(":::"+this.questionForm.controls('answer')[].value);
   //alert(":::***"+this.questionForm.get('answer1')?.value)
   //alert(":::***"+this.questionForm.get('answer2')?.value)
   //alert(":::***"+this.questionForm.get('answer3')?.value)
   //alert(":::***"+this.questionForm.get('answer4')?.value)

   if(this.jQuestionForm.get('answer1')?.value=="Expressions")
   {
   this.result=this.result+1;
   //alert("1"+this.result);
  
   }
   if(this.jQuestionForm.get('answer2')?.value=="syntax")
   {
     this.result=this.result+1;
     //alert("2"+this.result);
   }
   if(this.jQuestionForm.get('answer3')?.value=="Java Server Pages")
   {
     this.result=this.result+1;
     //alert("3"+this.result);
   }
   if(this.jQuestionForm.get('answer4')?.value=="include")
   {
     this.result=this.result+1;
     //alert("4"+this.result);
   }
   this.correctAns1="Expressions";
   this.correctAns2="syntax";
   this.correctAns3="Java Server Pages";
   this.correctAns4="include";
 }


}
