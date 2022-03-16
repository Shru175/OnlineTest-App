import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Answer } from '../Answer';
import { Question } from '../Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-est',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //@Input() answer:string;

  constructor(private service:QuestionService,private formBuilder: FormBuilder) { }

  questionForm:FormGroup;
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
    this.questionForm= this.formBuilder.group({
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    });
    
     //answer: this.formBuilder.array([])
   


    console.log("hello");
    
   console.log("length of return ");
   const data = this.service.getJSON("HTML");

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
   this.service.getJSON("HTML").subscribe(data => this.QuestionData=data);
   
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

    if(this.questionForm.get('answer1')?.value=="Hyper Text Markup Language")
    {
    this.result=this.result+1;
    //alert("1"+this.result);
   
    }
    if(this.questionForm.get('answer2')?.value=="Node Package Manager")
    {
      this.result=this.result+1;
      //alert("2"+this.result);
    }
    if(this.questionForm.get('answer3')?.value=="Mongo Express Angular Node")
    {
      this.result=this.result+1;
      //alert("3"+this.result);
    }
    if(this.questionForm.get('answer4')?.value=="client")
    {
      this.result=this.result+1;
      //alert("4"+this.result);
    }
    this.correctAns1="Hyper Text Markup Language";
    this.correctAns2="Node Package Manager";
    this.correctAns3="Mongo Express Angular Node";
    this.correctAns4="client";
  }


  

}
