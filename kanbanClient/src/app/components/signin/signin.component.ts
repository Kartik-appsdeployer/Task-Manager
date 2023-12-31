import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private auth: AuthService, private _router: Router){}
  email: any = "";
  password: any = "";
  myObj: any = {};
  visible: boolean = false;
  Success: any;
  decodedToken: any;
  message: any = "";

  onLogin(){
    console.log(this.email)
    console.log(this.password)
    this.myObj["email"] = this.email;
    this.myObj["password"] = this.password;
    console.log(this.myObj)
    this.auth.Signin(this.myObj).subscribe((res:any) => {
      if (res.success === true) {
        this.visible = true;
        this.Success = res.success
        setTimeout(() => {
          this.visible = false;
        }, 3000)
        const Token = res.Token
        this.decodedToken = jwt_decode(Token);
        localStorage.setItem("UserId", this.decodedToken.user.id);
        localStorage.setItem("UserName", this.decodedToken.user.name);
        this.email = ""
        this.password = ""
        this.message = res.message
        this._router.navigate([''])
      }
    })
  }
}
