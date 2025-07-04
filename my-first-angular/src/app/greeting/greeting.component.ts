import { Component } from '@angular/core';
 //Importing the User interface
 import { User } from '../model/User'; 
 import { Company } from '../model/Company'; // Importing the Company interface    

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {

  users: User[] = [
    { id: 1, name: 'Alice' , company: <Company> {
      name: 'TechCorp' 
    }},
    { id: 2, name: 'Bob' , company: <Company> {
      name: 'BizInc'}} ,
    { id: 3, name: 'Charlie'  , company : <Company>{
      name: 'WebSolutions'
    }},]

  name: string = 'World';
  isLogin: boolean = true;

 Ongreeting(name : string){
   console.log(`Hello, ${name}!`);
  }

  classCss = 'highlight'; // CSS class for styling

}
