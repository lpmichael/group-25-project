import { Component, Input, EventEmitter, OnInit, NgModule } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { first, Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { Colors } from '../colorsmodel/colors.model'; 



@Component({
  selector: 'app-uppertable',
  templateUrl: './uppertable.component.html',
  styleUrl: './uppertable.component.css',
  imports: [ReactiveFormsModule, HomeComponent, NgFor, NgIf, FormsModule],
})




export class UppertableComponent implements OnInit{
    amount = 0; //how many rows of colors
    formSubmitted = false;
    colors:Array<Colors> = [];
    selectedValue:Array<Colors> = [];


    colorForm!: FormGroup;
   
    constructor(private fb:FormBuilder, private db: DatabaseService) {}
   
    ngOnInit() {
      this.colorForm = this.fb.group({
        selectedColor: new FormControl()
      });

      this.getColorsFromDB(1, this.amount);
      }
    
//
    getColorsFromDB(firstTime: number, colorAmount: number){
      this.db.getAllColors(colorAmount, firstTime).subscribe({
        next: (response) => {
          this.colors = response;
          console.log ('Fetched: ', this.colors);
        },
        error: (err) => {
          console.error('AHHHHHHHHH: ', err);
        }})
        
      }


    counter (num: number){
      return new Array(num);
    }
   
    setAmountAndShow(ogData: FormGroup){
      this.amount = ogData.get('colors')?.value;
      this.formSubmitted = true;
      this.getColorsFromDB(1, this.amount);
      this.selectedValue = this.colors;
    }

    disableOption(id: number){
      this.selectedValue.forEach(element => {
        
      });
    }

    selected(i: number){
      return this.colors[i].ID;
    }
    }
   
  





