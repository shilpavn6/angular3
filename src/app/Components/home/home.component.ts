import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/Services/user.service';
import { User } from 'src/app/Model/user';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import {DialogComponent} from 'src/app/Components/dialog/dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adduser:any=[];
  name:string;
  text:string;
dtext:string='Deleted';
etext:string='Edited';
vtext:string='View';
public customAttributes:object;
constructor(private userService: UserService,private route:ActivatedRoute,private dialog: MatDialog) {
    
   }
  getU(){
  return this.userService.getUsers().subscribe(
    (data:{})=>{
    console.log(data);
    this.adduser=data;
    });
  }
  Delete(name:string) {
    this.dialog.open(DialogComponent,{
      width:'300px',  
      height:'300px',
      data:{name:name,text: this.dtext}
    });  
  }
  Edit(name:string) {
    this.dialog.open(DialogComponent,{
      width:'300px',     
       height:'300px',
    data:{name:name,text: this.etext}
   });
  }
  View(name:string) {
    this.dialog.open(DialogComponent,{
      width:'300px',
      height:'300px',
      data:{name:name,text:this.vtext}
    });
  }
  ngOnInit() {
    this.getU();
    this.customAttributes = {class: 'customcss'};
  }

}
 
