import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseEditEventListenerComponent } from './database-edit-event-listener.component';

describe('DatabaseEditEventListenerComponent', () => {
  let component: DatabaseEditEventListenerComponent;
  let fixture: ComponentFixture<DatabaseEditEventListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseEditEventListenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseEditEventListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
