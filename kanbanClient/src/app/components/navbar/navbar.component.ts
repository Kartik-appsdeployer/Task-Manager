import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userName: any = ""
  ngOnInit(){
    this.userName = localStorage.getItem("UserName")
    console.log(this.userName)
  }
}
