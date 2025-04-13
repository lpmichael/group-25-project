import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppertableComponent } from './uppertable.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UppertableComponent', () => {
  let component: UppertableComponent;
  let fixture: ComponentFixture<UppertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppertableComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
