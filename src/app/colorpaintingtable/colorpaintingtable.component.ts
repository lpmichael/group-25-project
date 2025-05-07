import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Colors } from '../colorsmodel/colors.model'; 
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-colorpaintingtable',
  imports: [ReactiveFormsModule, HomeComponent, NgFor, NgIf, FormsModule],
  templateUrl: './colorpaintingtable.component.html',
  styleUrl: './colorpaintingtable.component.css'
})
export class ColorpaintingtableComponent implements OnInit {
    headerLetters: String[] = [];
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    rowNums: number[] = [];
    columns = 0;
    rows = 0;
    amount = 0; //how many rows of colors
    formSubmitted = false;
    colors:Array<Colors> = [];
    selectedValue:Array<Colors> = [];


    colorForm!: FormGroup;
    
    constructor(private fb:FormBuilder, private db: DatabaseService) {}
    
  // UPPER TABLE CONTENTS:
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

    ngOnInit() {
      //UPPER TABLE CONTENTS:
      this.colorForm = this.fb.group({
        selectedColor: new FormControl()
      });

      this.getColorsFromDB(1, this.amount);

      //LOWER TABLE CONTENTS:

        for (var i = 0; i < this.letters.length; ++i) {
            this.headerLetters.splice(i, 0, this.letters[i]);  //add initial letters to array
        }

        for(var i = 0; i < this.letters.length; ++i) {
            for(var j = 0; j < this.letters.length; ++j) {
            this.headerLetters.splice(((26 * (i + 1)) + j), 0, (this.letters[i] + this.letters[j])); //add all sets of 2 letters to array
          }
        }

        for(var i = 1; i <= 1000; ++i) {
          this.rowNums.push(i);
        }
    }

    //LOWER TABLE CONTENTS:
    setColsAndRows(tableInfo: FormGroup){
      this.columns = tableInfo.get('cols')?.value;
      this.rows = tableInfo.get('rows')?.value;
    }

    clicker(c: number, r: number) {
      alert(this.headerLetters[c] + this.rowNums[r].toString());
    }

    //GENERATION FOR BOTH TABLES:
    tableGenerator(tableInfo: FormGroup){
      this.setAmountAndShow(tableInfo);
      this.setColsAndRows(tableInfo);
    }
}
