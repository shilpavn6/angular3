import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
loggedInUser:any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private userService:UserService) { }

  ngOnInit() {
    this.loginform=new FormGroup({
      Name:new FormControl('',Validators.required),
      Password:new FormControl('',Validators.required)
    }); 
    }
    get f() { return this.loginform.controls; }

    onSubmit({value,valid}:{value:User,valid:boolean}){   
     console.log(value,valid);
     this.loggedInUser=value;
     var locallist=JSON.parse(localStorage.getItem("userlist"));
     var localname = locallist["Name"];  
     var formname=this.f.Name.value;
     var localpass = locallist["Password"]; 
     var formpass=this.f.Password.value;
     if(localname == formname)
     {
       if(localpass==formpass)
          {
            alert('Logged In');
            this.router.navigate(['/home']);
          }
          else
          alert('Username does not exist');
     }
     else{
      alert('Username or password is incorrect');
     }
    }
  }


    
  
        

