import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Colors } from '../colorsmodel/colors.model';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { timeStamp } from 'console';
import { waitForAsync } from '@angular/core/testing';



@Component({
  selector: 'app-database',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './database.component.html',
  styleUrl: './database.component.css'
})
export class DatabaseComponent implements OnInit {
  colors:Array<Colors>=[];
  limitDelete = false;
  constructor(private db:DatabaseService){
    
}

  init(){
    this.db.getAllColors().subscribe({
      next: (response) => {
        this.colors = response;
            console.log ('Fetched: ', this.colors);
          },
          error: (err) => {
            console.error('AHHHHHHHHH: ', err);
          }})
  }
  
  
  ngOnInit(){
    this.init();
  }  

        dataAdd = new FormGroup({
        name: new FormControl(),
        hex: new FormControl()
      })                                              //must be a valid hex num
         
          onSubmitAdd() {
            console.log(this.dataAdd.value);
            this.db.addColor(this.dataAdd, this.colors);
            this.init();
            
          }
            
      
    


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
          this.db.updateColor(this.dataEdit, this.colors);
          this.init();
        }


        dataDelete = new FormGroup({
        color: new FormControl(Validators.required),
      })
         
          onSubmitDelete() {
            console.log('onsubmitdelete' + this.dataDelete.value);
            this.db.deleteColor(this.dataDelete);
            this.init();

          
         
          }

    getColors(colors: Array<Colors>){
      this.db.getAllColors().subscribe({
        next: (response) => {
          colors = response;
              console.log ('Fetched: ', this.colors);
            },
            error: (err) => {
              console.error('AHHHHHHHHH: ', err);
            }})
          }
  
        }





  