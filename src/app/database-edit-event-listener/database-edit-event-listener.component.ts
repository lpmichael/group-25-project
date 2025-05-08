import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatabaseComponent } from '../database/database.component';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-database-edit-event-listener',
  imports: [DatabaseComponent],
  templateUrl: './database-edit-event-listener.component.html',
  styleUrl: './database-edit-event-listener.component.css'
})

export class DatabaseEditEventListenerComponent {
  constructor(private db: DatabaseService){}

  updateColor(fg: FormGroup){
    
    this.db.updateColor(fg);
  }
}
