import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

