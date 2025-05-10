import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Colors } from '../colorsmodel/colors.model';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  colors:Array<Colors>=[];
  amount = 0;
  
  constructor(private db:DatabaseService){
    
  }
  ngOnInit() {
    this.db.getAllColors().subscribe({
      next: (response) => {
        this.colors = response;
            console.log ('Fetched: ', this.colors);
          },
          error: (err) => {
            console.error('AHHHHHHHHH: ', err);
          }})

      this.amount = this.colors.length;
  }  


  
  
 
  @Output() formEmit = new EventEmitter<FormGroup>();

  numsForm = new FormGroup({
    rows: new FormControl(0, [Validators.required, Validators.min(1)]),
    cols: new FormControl(0, [Validators.required, Validators.min(1)]),
    colors: new FormControl(0, [Validators.required, Validators.min(1)])
  })
      
     
      onSubmit() {
        console.log(this.numsForm.value);
        this.formEmit.emit(this.numsForm); 
      }


  

    }

