import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'colors-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
numsForm = new FormGroup({
  rows: new FormControl(0, [Validators.required, Validators.min(1)]),
  cols: new FormControl(0, [Validators.required, Validators.min(1)]),
  colors: new FormControl(0, [Validators.required, Validators.min(1)])
})
    
   
    onSubmit() {
      console.log(this.numsForm.value);
    }
}

/*
Check this later: https://angular.dev/tutorials/learn-angular/9-output

    rows = new FormControl('');
    cols = new FormControl('');
    colors = new FormControl('');
    */