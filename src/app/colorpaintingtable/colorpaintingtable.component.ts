import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor, NgStyle } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Colors } from '../colorsmodel/colors.model'; 
import { DatabaseService } from '../services/database.service';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-colorpaintingtable',
  imports: [ReactiveFormsModule, HomeComponent, NgFor, NgIf, FormsModule, NgStyle],
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
    coloredCells: String[][] = [[]];
    selectedColorIndex = -1;
    //selected background color hex for painting the table - default to our site's background color
    backgroundColorHex = "#fff4d1";
    backgroundColorArray: String[][] = [[]];


    colorForm!: FormGroup;
    
    constructor(private fb:FormBuilder, private db: DatabaseService) {}
    
  // UPPER TABLE CONTENTS:
    getColorsFromDB(firstTime: number, colorAmount: number){
      this.db.getAllColors().subscribe({
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
      //build up the array to hold the table cell values
      for(var i = 0; i < this.amount - 1; i++) {
        this.coloredCells.push([]);
      }
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

      // create array to store background colors
      for(var i = 0; i < this.rows; i++) {
        this.backgroundColorArray.push([]);
        for (var j = 0; j < this.columns; j++) {
          this.backgroundColorArray[i].push("#fff4d1");
        }
      }
    }

    clicker(c: number, r: number) {
      var textContent = this.headerLetters[c] + this.rowNums[r].toString();
      textContent = textContent.toString();
    
      if(this.selectedColorIndex != -1) {
        // ANGULAR MADE ME DO IT THIS WAY INSTEAD OF INSERTING DIRECTLY :)
        var currentContents = this.coloredCells[this.selectedColorIndex];
        var newArray = [];
        for (var i = 0; i < currentContents.length; i++) {
          newArray.push(currentContents[i]);
        }
        newArray.push(textContent);
        this.coloredCells[this.selectedColorIndex] = newArray;

        //update background color for cell in array!
        this.backgroundColorArray[r][c] = this.backgroundColorHex;
      }
      alert(textContent);
    }

    selectedRow(i: number) {
      this.selectedColorIndex = i;
      this.backgroundColorHex = "#" + this.colors[i].hex_value;
      //TODO: fix - will only use hex color in original order from list
    }

    getValues(r: number) {
      this.coloredCells[r].sort();
      return this.coloredCells[r];
    }

    bgColor(c: number, r: number) {
      var hex = this.backgroundColorArray[r][c];
      return {'background-color': hex};
    }

    //GENERATION FOR BOTH TABLES:
    tableGenerator(tableInfo: FormGroup){
      this.setAmountAndShow(tableInfo);
      this.setColsAndRows(tableInfo);
    }
}
