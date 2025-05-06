import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Colors } from '../colorsmodel/colors.model';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-database',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './database.component.html',
  styleUrl: './database.component.css'
})
export class DatabaseComponent implements OnInit {
  colors:Array<Colors>=[];
  constructor(private db:DatabaseService){
    
}

  
  
  ngOnInit(){
    this.db.getAllColors(0,0).subscribe({
      next: (response) => {
      this.colors = response;
      console.log ('Fetched: ', this.colors);
    },
    error: (err) => {
      console.error('AHHHHHHHHH: ', err);
    }})}  


    @Output() addData = new EventEmitter<FormGroup>();    //The form to add something
    
    
        dataAdd = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]), //must be only letters or spaces
        hex: new FormControl('',  [Validators.required, Validators.pattern('/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/')])
      })                                              //must be a valid hex num
         
          onSubmitAdd() {
            console.log(this.dataAdd.value);
            this.db.updateColor(this.dataAdd); 
          }
    
    @Output() editData = new EventEmitter<FormGroup>();   //the form the edit something

      dataEdit = new FormGroup({
      //color: new FormControl(Validators.required),
      //name: new FormControl('populate from dropdown', [Validators.required, Validators.pattern('[a-zA-Z ]*')]), //letters or spaces only
      //hex: new FormControl('populate from dropdown?', [Validators.required, Validators.pattern('/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/')])
      color: new FormControl(),
      name: new FormControl(),
      hex: new FormControl()
    
    })                                                //gotta be a hex number
       
        onSubmitEdit() {
          console.log(this.dataEdit.value);
          this.editData.emit(this.dataEdit); 
        }

    @Output() deleteData = new EventEmitter<FormGroup>();   //the form to delete something 

        dataDelete = new FormGroup({
        color: new FormControl(Validators.required),
      })
         
          onSubmitDelete() {
            console.log(this.dataDelete.value);
            this.deleteData.emit(this.dataDelete); 
          }
  }


function ngOnInIt() {
  throw new Error('Function not implemented.');
}
  