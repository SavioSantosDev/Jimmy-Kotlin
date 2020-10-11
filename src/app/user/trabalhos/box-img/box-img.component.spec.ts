import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImgComponent } from './box-img.component';

describe('BoxImgComponent', () => {
  let component: BoxImgComponent;
  let fixture: ComponentFixture<BoxImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
