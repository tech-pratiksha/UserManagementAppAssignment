import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, ) { }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    const formcontrol = this.loginForm;
    if(formcontrol.controls.email.value=="Rashmi@gmail.com" &&
    formcontrol.controls.password.value=="123456"){
          localStorage.setItem("username",formcontrol.controls.email.value);
          this.router.navigate(['list-user']);
    }
    else{
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

}
