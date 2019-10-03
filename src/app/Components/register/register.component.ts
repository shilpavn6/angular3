import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Model/user';
import { Http, Headers, RequestOptions } from "@angular/http";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  adduser:any;
  registerForm: FormGroup;
  submitted=false;
  @Input() userDetails= this.registerForm;
  constructor(private userService: UserService,private router:Router) { }

    ngOnInit() { 
      this.registerForm =new FormGroup({
        Name: new FormControl('', Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z ]*')])),
        Email: new FormControl('', [Validators.required,Validators.email]),
        NickName: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        Dob: new FormControl('', [Validators.required]),
        Gender: new FormControl('', [Validators.required]),     
        Password:new FormControl ('',Validators.compose( [Validators.required, Validators.minLength(8),Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]))
    });
  }
  get f() { return this.registerForm.controls; }
    onSubmit({value,valid}:{value:User,valid:boolean}){  
      this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }    
      console.log(value,valid);
      this.adduser=value;
      localStorage.setItem('userlist', JSON.stringify(this.adduser));
      var retrieve=JSON.parse(localStorage.getItem('userlist'));
      console.log(retrieve);
     // this.userService.registerUser(this.userDetails).subscribe((data: {}) => {
        this.router.navigate(['/login']);
      
    }
  }
  