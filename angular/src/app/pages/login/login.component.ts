import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm:any
  constructor() { }
  imgVisible = true;   
  changeView(){
    this.imgVisible=false;
  }
  ngOnInit(): void {
    
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'phonenumber': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
  }
  onSubmit(){
    console.log(this.signupForm)
  }
}
