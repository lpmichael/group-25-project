import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-uppertable',
  templateUrl: './uppertable.component.html',
  styleUrl: './uppertable.component.css',
  imports: [ReactiveFormsModule, HomeComponent, NgFor],
})




export class UppertableComponent implements OnInit{
    amount = 0; //how many rows of colors
    formSubmitted = false;
    i= 0;
  
    
    colors  = [
      { id: 0, name: "Red", disabled: false },
      { id: 1, name: "Orange", disabled: false },
      { id: 2, name: "Yellow", disabled: false },
      { id: 3, name: "Green", disabled: false},
      {id: 4, name: "Teal", disabled: false},
      {id: 5, name: "Blue", disabled: false},
      {id: 6, name: "Purple", disabled: false },
      {id: 7, name: "Brown", disabled: false},
      {id: 8, name: "Gray", disabled: false},
      {id: 9, name: "Black", disabled: false}
    ];

    colorForm!: FormGroup;
   
    constructor(private fb:FormBuilder) {
    }
   
    ngOnInit() {
      
      this.colorForm = this.fb.group({
        allColors: new FormControl(this.colors,)
      });
    }

    counter (num: number){
      return new Array(num);
    }
   
    setAmountAndShow(ogData: FormGroup){
      this.amount = ogData.get('colors')?.value;
      this.formSubmitted = true;

    }
    }
   
  





