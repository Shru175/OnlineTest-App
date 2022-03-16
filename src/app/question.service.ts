import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Question';

import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) {
   
   }
  url:string="./assets/json/";
 // getQuestions():Question[]{
 //this.url= this.url+subject+".json";

  //}
  public getJSON(testSubject:string): Observable<Question[]> {
    
    if(testSubject=="JSP")
    {
     // return this.http.get<Question[]>("./assets/json/javascript.json");
      this.url="./assets/json/javascript.json";
      //console.log("here1"+this.http.get<Question[]>("./assets/json/html.json").forEach);
    }
    else if(testSubject=="HTML")
    {
      this.url="./assets/json/html.json";
      //return this.http.get<Question[]>("./assets/json/html.json");
    }
   // alert("urrl"+this.url);
    return this.http.get<Question[]>(this.url);
    //return this.http.get<Question[]>("./assets/json/html.json");
    
}
  /*getAllQuestions():Observable<Question[]>{
    
    //alert("this ulr"+this.url);
    return this.http.get<Question[]>("./assets/json/htmlN.json")
   // return (this.http.get<Question[]>(this.url));
    
      }*/
}
