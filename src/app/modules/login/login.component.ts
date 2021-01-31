import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  username: string = ''
  password: string = ''

  ngOnInit(): void {
    if(this.isLoggedIn()){
      this.router.navigate(['dashboard'])
    }
  }

  isLoggedIn() {
    return localStorage.getItem('auth-token')
  }

  onSubmit(){
    console.log(this.username, this.password)
    if(this.username && this.password){
      if(this.username == 'madhu' && this.password =='madhu'){
        let token = {
          username: this.username, password: this.password
        }
        let tokenStr: string = JSON.stringify(token)
        localStorage.setItem('auth-token',tokenStr)
        this.router.navigate(['dashboard'])
      }
    }
    
  }

}
