import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import {NgxPrintModule} from 'ngx-print';

@Component({
  selector: 'app-colorpaintingtable',
  imports: [ReactiveFormsModule, HomeComponent, NgxPrintModule],
  templateUrl: './colorpaintingtable.component.html',
  styleUrl: './colorpaintingtable.component.css'
})
export class ColorpaintingtableComponent implements OnInit {
  headerLetters: String[] = [];
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  rowNums: number[] = [];
  columns = 0;
  rows = 0;

    ngOnInit() {
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

    setColsAndRows(tableInfo: FormGroup){
      this.columns = tableInfo.get('cols')?.value;
      this.rows = tableInfo.get('rows')?.value;
    }

    clicker(c: number, r: number) {
      alert(this.headerLetters[c] + this.rowNums[r].toString());
    }
}
