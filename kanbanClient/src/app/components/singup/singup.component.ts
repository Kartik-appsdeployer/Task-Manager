import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  constructor(private http: HttpClient, private auth: AuthService, private _router: Router) { }
  userName: any = "";
  email: any = "";
  password: any = "";
  myObj: any = {};
  visible: boolean = false;
  Success: any;
  message: any = "";

  OnSubmit() {
    this.myObj["Username"] = this.userName
    this.myObj["email"] = this.email
    this.myObj["password"] = this.password
    this.auth.Register(this.myObj).subscribe((res: any) => {
      if (res.success === true) {
        this.visible = true;
        this.Success = res.success
        setTimeout(() => {
          this.visible = false;
        }, 3000)
        this.userName = ""
        this.email = ""
        this.password = ""
        this.message = res.message
        this._router.navigate(['signin'])
      }
    })
  }
}
