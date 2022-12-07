import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  constructor(private router:Router,private ds:DataService){}

  login(){
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect username or password')
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
