import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MochiFaceComponent } from './mochi-face.component';

describe('MochiFaceComponent', () => {
  let component: MochiFaceComponent;
  let fixture: ComponentFixture<MochiFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochiFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MochiFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
