import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpaintingtableComponent } from './colorpaintingtable.component';

describe('ColorpaintingtableComponent', () => {
  let component: ColorpaintingtableComponent;
  let fixture: ComponentFixture<ColorpaintingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorpaintingtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorpaintingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
