import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";
  show: boolean= false;
  submit(){
    console.log("Username is " + this.username)
    this.clear();
  }
  clear(){
    this.username="";
    this.password="";
    this.show=true;
  }
}
