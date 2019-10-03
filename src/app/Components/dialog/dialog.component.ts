import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA)public data:any) { 
  
  }
  onClose():void {
    this.dialogRef.close();
  }

  ngOnInit() {
  
  }

}
