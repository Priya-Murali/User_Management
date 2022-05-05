import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {Registerdet} from 'src/app/models/Registerdet';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm:any
  constructor() { }
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
  imgVisible = true;   
  changeView(){
    this.imgVisible=false;
  }
  onSubmit(){
    console.log(this.signupForm)
  }
}
