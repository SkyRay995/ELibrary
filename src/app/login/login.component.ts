import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  redirectToRegistration(){
    this.router.navigate(['/registration'])
  }
  hide = true;
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
