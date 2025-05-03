import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { NgFor } from '@angular/common';
import { DatabaseService } from '../services/database.service';
import { response } from 'express';


@Component({
  selector: 'app-uppertable',
  templateUrl: './uppertable.component.html',
  styleUrl: './uppertable.component.css',
  imports: [ReactiveFormsModule, HomeComponent, NgFor, NgIf],
})




export class UppertableComponent implements OnInit{
    amount = 0; //how many rows of colors
    formSubmitted = false;
    i= 0;
    data: any;

    
  

    colorForm!: FormGroup;
   
    constructor(private fb:FormBuilder, private db: DatabaseService) {}
   
    ngOnInit() {
      this.colorForm = this.fb.group({
        allColors: new FormControl()
      });

      this.db.getAllColors(this.amount).subscribe({
        next: (response) => {
          this.data = response;
          console.log ('Fetched: ', this.data);
        },
        error: (err) => {
          console.error('AHHHHHHHHH: ', err);
        }
      })
    }

    counter (num: number){
      return new Array(num);
    }
   
    setAmountAndShow(ogData: FormGroup){
      this.amount = ogData.get('colors')?.value;
      this.formSubmitted = true;

    }


    }
   
  





