import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="Your perfect banking partner."
  data="Enter PASSWORD"
  acno=""
  psw=""

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0}
  }

  login(){
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
   // alert("login clicked")

    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        alert('login success')
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("incorrect username")
    }
  }


  // login(a:any,b:any){                   //event binding using template rendering variable

  //   this.acno=a.value
  //   this.psw=b.value


  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
   

  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]['password']){
  //       alert('login success')
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("incorrect username")
  //   }
  // }



//   acnoChange(event:any){
          
//     this.acno=event.target.value
//   }
//   pswChange(event:any){
//     this.psw=event.target.value
    
    
//   }



}
